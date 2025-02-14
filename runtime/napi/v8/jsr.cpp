#include "jsr.h"
#include <libgen.h>
#include <dlfcn.h>
#include <sys/stat.h>
#include <ctime>
#include <utime.h>

using namespace v8;
using namespace tns;

tns::SimpleAllocator g_allocator;

JSR::JSR(): isolate(nullptr) {
    v8::Isolate::CreateParams create_params;
    create_params.array_buffer_allocator = &g_allocator;

    if (!JSR::s_mainThreadInitialized) {
        JSR::platform = v8::platform::NewDefaultPlatform().release();
        v8::V8::InitializePlatform(JSR::platform);
        v8::V8::Initialize();
        JSR::s_mainThreadInitialized = true;
    }
    isolate = v8::Isolate::New(create_params);
}
v8::Platform* JSR::platform = nullptr;
bool JSR::s_mainThreadInitialized = false;
std::unordered_map<napi_env, JSR*> JSR::env_to_jsr_cache;

napi_status js_create_runtime(napi_runtime *runtime) {
    if (!runtime) return napi_invalid_arg;
    *runtime = (napi_runtime) new JSR();

    return napi_ok;
}

napi_status js_set_runtime_flags(const char* flags) {
    V8::V8::SetFlagsFromString(flags);
    return napi_ok;
}

napi_status js_lock_env(napi_env env) {
    auto itFound = JSR::env_to_jsr_cache.find(env);
    if (itFound == JSR::env_to_jsr_cache.end()) {
        return napi_invalid_arg;
    }

    itFound->second->lock();

    return napi_ok;
}

napi_status js_unlock_env(napi_env env) {
    auto itFound = JSR::env_to_jsr_cache.find(env);
    if (itFound == JSR::env_to_jsr_cache.end()) {
        return napi_invalid_arg;
    }

    itFound->second->unlock();

    return napi_ok;
}

napi_status js_create_napi_env(napi_env* env, napi_runtime runtime) {
    if (env == nullptr) return napi_invalid_arg;
    JSR* jsr = (JSR*) runtime;
    v8::Locker locker(jsr->isolate);
    v8::HandleScope handle_scope(jsr->isolate);
    v8::Local<v8::Context> context = v8::Context::New(jsr->isolate);
    *env = new NapiEnvironment(context, NAPI_VERSION_EXPERIMENTAL);
    JSR::env_to_jsr_cache.insert(std::make_pair(*env, jsr));

    return napi_ok;
}

napi_status js_free_napi_env(napi_env env) {
    if (env == nullptr) return napi_invalid_arg;
    env->DeleteMe();
    return  napi_ok;
}

napi_status js_free_runtime(napi_runtime runtime) {
    JSR* jsr = (JSR*) runtime;
//    jsr->isolate->Dispose();
    delete jsr;
    return napi_ok;
}

napi_status js_execute_script(napi_env env,
                              napi_value script,
                              const char *file,
                              napi_value *result) {

    return napi_run_script_source(env, script, file, result);
}

napi_status js_execute_pending_jobs(napi_env env) {
    env->isolate->PerformMicrotaskCheckpoint();
    return napi_ok;
}

napi_status js_get_engine_ptr(napi_env env, int64_t *engine_ptr) {
    *engine_ptr = reinterpret_cast<int64_t>(env->context()->GetIsolate());
    return napi_ok;
}

napi_status js_adjust_external_memory(napi_env env, int64_t changeInBytes, int64_t* externalMemory) {
    *externalMemory = env->isolate->AdjustAmountOfExternalAllocatedMemory(changeInBytes);
    return napi_ok;
}

napi_status js_cache_script(napi_env env, const char *source, const char *file) {
    v8::Local<v8::String> sourceString = v8::String::NewFromUtf8(env->isolate, source).ToLocalChecked();
    v8::Local<v8::String> fileString = v8::String::NewFromUtf8(env->isolate, file).ToLocalChecked();
    v8::ScriptOrigin origin(env->isolate, fileString);
    v8::Local<v8::Script> script = v8::Script::Compile(env->context(),sourceString, &origin).ToLocalChecked();

    Local<UnboundScript> unboundScript = script->GetUnboundScript();
    ScriptCompiler::CachedData* cachedData = ScriptCompiler::CreateCodeCache(unboundScript);

    int length = cachedData->length;
    auto cachePath = std::string(file) + ".cache";
    // File::WriteBinary(cachePath, cachedData->data, length);
    // write using c++ stdlib
    std::ofstream cacheFile(cachePath, std::ios::binary);
    cacheFile.write(reinterpret_cast<const char*>(cachedData->data), length);
    cacheFile.close();
    delete cachedData;
    // make sure cache and js file have the same modification date
    struct stat result;
    struct utimbuf new_times;
    new_times.actime = time(nullptr);
    new_times.modtime = time(nullptr);
    if (stat(file, &result) == 0) {
        auto jsLastModifiedTime = result.st_mtime;
        new_times.modtime = jsLastModifiedTime;
    }
    utime(cachePath.c_str(), &new_times);

    return napi_ok;
}

napi_status js_run_cached_script(napi_env env, const char * file, napi_value script, void* cache, napi_value *result) {
    auto cachePath = std::string(file) + ".cache";
    struct stat s_result;
    if (stat(cachePath.c_str(), &s_result) == 0) {
        auto cacheLastModifiedTime = s_result.st_mtime;
        if (stat(file, &s_result) == 0) {
            auto jsLastModifiedTime = s_result.st_mtime;
            if (jsLastModifiedTime != cacheLastModifiedTime) {
                // files have different dates, ignore the cache file (this is enforced by the
                // SaveScriptCache function)
                return napi_cannot_run_js;
            }
        }
    }

    int length = 0;
    // auto data = File::ReadBinary(cachePath, length);
    // if (!data) {
        // return napi_cannot_run_js;
    // }
    // read using c++ stdlib
    std::ifstream cacheFile(cachePath, std::ios::binary);
    if (!cacheFile.is_open()) {
        return napi_cannot_run_js;
    }
    cacheFile.seekg(0, std::ios::end);
    length = cacheFile.tellg();
    cacheFile.seekg(0, std::ios::beg);
    char* data = new char[length];
    cacheFile.read(data, length);
    cacheFile.close();

    auto * cacheData = new ScriptCompiler::CachedData(reinterpret_cast<uint8_t*>(data), length, ScriptCompiler::CachedData::BufferOwned);
    std::string filePath = std::string("file://") + file;

    auto fullRequiredModulePathWithSchema = v8::String::NewFromUtf8(env->isolate, filePath.c_str());

    ScriptOrigin origin(env->isolate, fullRequiredModulePathWithSchema.ToLocalChecked());

    v8::Local<v8::String> scriptText;
    memcpy(static_cast<void*>(&scriptText), &script, sizeof(script));

    TryCatch tc(env->isolate);

    ScriptCompiler::Source source(scriptText, origin, cacheData);
    ScriptCompiler::CompileOptions option = ScriptCompiler::kConsumeCodeCache;
    auto maybeScript = ScriptCompiler::Compile(env->context(), &source, option);
    if (maybeScript.IsEmpty() || tc.HasCaught()) {
        return napi_cannot_run_js;
    }
    Local<Script> cached_script = maybeScript.ToLocalChecked();

    v8::Local<Value> ret = cached_script->Run(env->context()).ToLocalChecked();

    *result = reinterpret_cast<napi_value>(*ret);

    return napi_ok;
}

napi_status js_get_runtime_version(napi_env env, napi_value* version) {

    napi_create_string_utf8(env, "V8", NAPI_AUTO_LENGTH, version);

    return napi_ok;
}
