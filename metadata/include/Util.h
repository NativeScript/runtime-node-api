#pragma once

#include <clang-c/Index.h>
#include <string>

namespace metagen {

inline std::string jsifySelector(std::string selector) {
  std::string jsifiedSelector;
  bool nextupper = false;
  for (auto c : selector) {
    if (c == ':') {
      nextupper = true;
    } else if (nextupper) {
      jsifiedSelector += toupper(c);
      nextupper = false;
    } else {
      jsifiedSelector += c;
    }
  }
  return jsifiedSelector;
}

inline std::string jsifyName(std::string name) {
  if (name == "arguments" || name == "function" || name == "DOMException") {
    return name + "$";
  } else {
    return name;
  }
}

inline std::vector<std::string> splitCamelCase(std::string value) {
  std::vector<std::string> result;

  std::string current = "";
  for (auto c : value) {
    if (isupper(c)) {
      if (current != "") {
        result.emplace_back(current);
      }
      current = "";
    }
    current += c;
  }

  if (current != "") {
    result.emplace_back(current);
  }

  return result;
}

inline std::string &rtrim(std::string &s) {
  s.erase(std::find_if(s.rbegin(), s.rend(),
                       [](unsigned char ch) { return !std::isspace(ch); })
              .base(),
          s.end());
  return s;
}

inline std::string stripCInfo(std::string val) {
  if (val.find("const ") == 0) {
    val = val.substr(6);
  }

  if (val.find("__kindof ") == 0) {
    val = val.substr(9);
  }

  if (val.find("struct ") == 0) {
    val = val.substr(7);
  }

  if (val.find("enum ") == 0) {
    val = val.substr(5);
  }

  if (val.find("union ") == 0) {
    val = val.substr(6);
  }

  return val;
}

inline std::string transformStructName(std::string name) {
  auto find = name.find("unnamed at");
  if (find == std::string::npos) {
    find = name.find("anonymous at");
  }
  if (find != std::string::npos) {
    // hash the name
    std::hash<std::string> hasher;
    name = "unnamed_" + std::to_string(hasher(name.substr(find)));
  }
  return name;
}

inline std::string getFrameworkName(CXCursor cursor) {
  CXSourceLocation srcloc = clang_getCursorLocation(cursor);
  CXFile file;
  clang_getFileLocation(srcloc, &file, nullptr, nullptr, nullptr);
  CXString fileName = clang_getFileName(file);
  std::string fileNameStr = clang_getCString(fileName);
  clang_disposeString(fileName);
  auto pos = fileNameStr.find(".framework/");
  if (pos == std::string::npos) {
    return "Runtime";
  }
  std::string frameworkName = fileNameStr.substr(0, pos);
  frameworkName = frameworkName.substr(frameworkName.find_last_of("/") + 1);
  return frameworkName;
}

inline bool isAvailable(CXCursor cursor) {
  CXAvailabilityKind availability = clang_getCursorAvailability(cursor);
  return availability == CXAvailability_Available ||
         availability == CXAvailability_Deprecated;
}

inline bool isSelectorOwned(std::string selectorName) {
  return selectorName.find("copy") == 0 ||
         selectorName.find("mutableCopy") == 0 ||
         selectorName.find("new") == 0 || selectorName.find("alloc") == 0;
}

} // namespace metagen
