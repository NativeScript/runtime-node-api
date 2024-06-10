#ifndef NAPIUTIL_H
#define NAPIUTIL_H

#include <string>
#include "js_native_api.h"

inline std::string getStringValue(napi_env env, napi_value str) {
    size_t length = 0;
    napi_get_value_string_utf8(env, str, nullptr, 0, &length);
    char* strbuf = (char*) malloc(length + 1);
    napi_get_value_string_utf8(env, str, strbuf, length + 1, &length);
    std::string result = strbuf;
    free(strbuf);
    return result;
}

#endif // NAPIUTIL_H
