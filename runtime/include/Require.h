#ifndef REQUIRE_H
#define REQUIRE_H

#include <string>
#include "js_native_api.h"

class Require {
public:
    Require(std::string path, std::string tilde) : path(path), tilde(tilde) {}

    static void init(napi_env env, std::string &path, std::string &tilde);

    static napi_value createRequire(napi_env env, std::string &path, std::string &tilde);
    
    static void finalize(napi_env env, void *data, void *hint);

    std::string resolve(std::string &spec);
    napi_value require(napi_env env, std::string &spec);

    static napi_value requireCallback(napi_env env, napi_callback_info cbinfo);

    std::string path;
    std::string tilde;
};

#endif // REQUIRE_H
