//
// Created by Ammar Ahmed on 01/12/2024.
//

#ifndef TEST_APP_JSR_H
#define TEST_APP_JSR_H

#include "v8-api.h"
#include "jsr_common.h"
#include "libplatform/libplatform.h"
#include "SimpleAllocator.h"
// #include "JEnv.h"

typedef struct NapiRuntime *napi_runtime;

class JSR {
public:
    JSR();
    v8::Isolate* isolate;
    static bool s_mainThreadInitialized;
    static v8::Platform* platform;

    std::recursive_mutex js_mutex;
    void lock() {
        js_mutex.lock();
    }
    void unlock() {
        js_mutex.unlock();
    }

    static std::unordered_map<napi_env, JSR *> env_to_jsr_cache;
};

class NapiScope {
public:
    explicit NapiScope(napi_env env)
            : env_(env),
              locker_(env->isolate),
              isolate_scope_(env->isolate),
              context_scope_(env->context()),
              handle_scope_(env->isolate)
    {
        napi_open_handle_scope(env_, &napiHandleScope_);
    }

    ~NapiScope() {
        napi_close_handle_scope(env_, napiHandleScope_);
    }

private:
    napi_env env_;
    v8::Locker locker_;
    v8::Isolate::Scope isolate_scope_;
    v8::Context::Scope context_scope_;
    v8::HandleScope handle_scope_;
    napi_handle_scope napiHandleScope_;
};

#define JSEnterScope    \
v8::Locker locker(env->isolate);   \
v8::HandleScope handle_scope(env->isolate);

namespace tns {

    // inline static v8::Local<v8::String> ConvertToV8String(v8::Isolate* isolate, const jchar* data, int length) {
    //     return v8::String::NewFromTwoByte(isolate, (const uint16_t*) data, v8::NewStringType::kNormal, length).ToLocalChecked();
    // }

    inline static v8::Local<v8::String> ConvertToV8String(v8::Isolate* isolate, const std::string& s) {
        return v8::String::NewFromUtf8(isolate, s.c_str(), v8::NewStringType::kNormal, s.length()).ToLocalChecked();
    }

    inline static v8::Local<v8::String> ConvertToV8String(v8::Isolate* isolate, const char* data, int length)  {
        return v8::String::NewFromUtf8(isolate, (const char*) data, v8::NewStringType::kNormal, length).ToLocalChecked();
    }

    inline static v8::Local<v8::String> ConvertToV8UTF16String(v8::Isolate* isolate, const std::u16string& utf16string) {
        return v8::String::NewFromTwoByte(isolate, ((const uint16_t*) utf16string.data())).ToLocalChecked();
    }

    inline static v8::Local<v8::String> ToV8String(v8::Isolate *isolate, const std::string &value) {
        return v8::String::NewFromUtf8(isolate, value.c_str(), v8::NewStringType::kNormal,
                                       (int) value.length()).ToLocalChecked();
    }

    inline static std::string ConvertToString(const v8::Local<v8::String>& s) {
        if (s.IsEmpty()) {
            return {};
        } else {
            auto isolate = v8::Isolate::GetCurrent();
            v8::String::Utf8Value str(isolate, s);
            return {*str};
        }
    }


    // static v8::Local<v8::Value> jstringToV8String(v8::Isolate* isolate, jstring value) {
    //     if (value == nullptr) {
    //         return Null(isolate);
    //     }

    //     JEnv env;
    //     auto chars = env.GetStringChars(value, NULL);
    //     auto length = env.GetStringLength(value);
    //     auto v8String = tns::ConvertToV8String(isolate, chars, length);
    //     env.ReleaseStringChars(value, chars);

    //     return v8String;
    // }

    inline static std::string ToString(v8::Isolate *isolate, const v8::Local<v8::Value> &value) {
        if (value.IsEmpty()) {
            return std::string();
        }

        if (value->IsStringObject()) {
            v8::Local<v8::String> obj = value.As<v8::StringObject>()->ValueOf();
            return ToString(isolate, obj);
        }

        v8::String::Utf8Value result(isolate, value);

        const char *val = *result;
        if (val == nullptr) {
            return std::string();
        }

        return std::string(*result, result.length());
    }

    // static std::string jstringToString(jstring value) {
    //     if (value == nullptr) {
    //         return {};
    //     }

    //     JEnv env;

    //     jboolean f = JNI_FALSE;
    //     auto chars = env.GetStringUTFChars(value, &f);
    //     std::string s(chars);
    //     env.ReleaseStringUTFChars(value, chars);

    //     return s;
    // }
}

#endif //TEST_APP_JSR_H
