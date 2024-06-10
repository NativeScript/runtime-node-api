#include <string>
#include "js_native_api.h"
#include "NapiUtil.h"

#import <Foundation/Foundation.h>

class Require {
public:
    Require(std::string path) : path(path) {}
    
    static napi_value createRequire(napi_env env, std::string &path) {
        Require *require = new Require(path);
        napi_value result;
        napi_create_function(env, "require", NAPI_AUTO_LENGTH, Require::requireCallback, require, &result);
        napi_ref ref;
        napi_wrap(env, result, require, Require::finalize, nullptr, &ref);
        return result;
    }
    
    static void finalize(napi_env env, void *data, void *hint) {
        Require *require = (Require *) data;
        delete require;
    }
    
    std::string resolve(std::string &spec) {
        if (spec.find("/") == 0) {
            return spec;
        }
        
        size_t dotpos = spec.find(".");
        size_t tildepos = spec.find("~");
        std::string result;
        if (tildepos == 0) {
            result = [NSBundle.mainBundle.resourcePath UTF8String];
            result += "/app";
        } else {
            result = path;
        }
        
        if (dotpos == 0 || tildepos == 0) {
            std::string relativeSpec = spec.substr(spec.find("./") == 0 || spec.find("~/") == 0 ? 2 : 1);
            if (relativeSpec.empty()) {
                result += "/index.js";
            } else {
                result += "/" + relativeSpec;
            }
        } else {
            result += "/" + spec;
        }
        
        size_t pos = result.rfind("/");
        size_t jspos = result.find(".js");
        if (jspos < pos || jspos == std::string::npos) {
            result += result.ends_with("/") ? "index.js" : "/index.js";
        }
        
        return result;
    }
    
    napi_value require(napi_env env, std::string &spec) {
        std::string path = resolve(spec);
        NSError *error = nil;
        
        NSString *source = [NSString stringWithContentsOfFile:[NSString stringWithUTF8String:path.c_str()] encoding:NSUTF8StringEncoding error:&error];
        if (error != nil) {
            NSLog(@"error: %@", error);
            napi_throw_error(env, nullptr, [[error localizedDescription] UTF8String]);
            return nullptr;
        }
        
        if (spec.ends_with(".json")) {
            napi_value script, result;
            napi_create_string_utf8(env, [source UTF8String], NAPI_AUTO_LENGTH, &script);
            napi_run_script(env, script, &result);
            return result;
        }
        
        std::string bootstrap;
        bootstrap = "let cjsModule; try { cjsModule = function cjsModule(exports, require, module, __filename, __dirname) { try { ";
        bootstrap += [source UTF8String];
        bootstrap += "\n } catch(e) { console.log('evaluate module failed:', e.stack); } }; Object.defineProperty(cjsModule, \"name\", { value: `" + path + "` }); } catch (e) { console.log(e.stack) }\n cjsModule";
        
        napi_status status;
        napi_value func, script, module, exports, require, __filename, __dirname, global, result;
        
        napi_create_string_utf8(env, bootstrap.c_str(), NAPI_AUTO_LENGTH, &script);
        
        status = napi_run_script(env, script, &func);
        if (status != napi_ok) {
            const napi_extended_error_info *info;
            napi_get_last_error_info(env, &info);
            NSLog(@"error in run script: %d, %s", status, info->error_message);
            return nullptr;
        }
        
        napi_create_object(env, &module);
        napi_create_object(env, &exports);
        
        napi_set_named_property(env, module, "exports", exports);
        
        napi_get_global(env, &global);
        
        napi_create_string_utf8(env, path.c_str(), NAPI_AUTO_LENGTH, &__filename);
        
        std::string dirname = path.substr(0, path.rfind("/"));
        
        require = Require::createRequire(env, dirname);
        
        napi_create_string_utf8(env, dirname.c_str(), NAPI_AUTO_LENGTH, &__dirname);
        
        napi_value argv[5] = {exports, require, module, __filename, __dirname};
        
        status = napi_call_function(env, global, func, 5, argv, &result);
        if (status != napi_ok) {
            const napi_extended_error_info *info;
            napi_get_last_error_info(env, &info);
            NSLog(@"error in evaluate module: %d, %s", status, info->error_message);
            return nullptr;
        }
        
        napi_get_named_property(env, module, "exports", &exports);
        return exports;
    }
    
    static napi_value requireCallback(napi_env env, napi_callback_info cbinfo) {
        napi_value arg;
        Require *require;
        size_t argc = 1;
        napi_get_cb_info(env, cbinfo, &argc, &arg, nullptr, (void**) &require);
        std::string spec = getStringValue(env, arg);
        return require->require(env, spec);
    }
    
    std::string path;
};
