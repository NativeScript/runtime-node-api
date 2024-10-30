cmake_minimum_required(VERSION 3.15)

# Project metadata

set(NAME NativeScriptRuntime)
set(VERSION 0.1.0)
set(BUNDLE_IDENTIFIER "org.nativescript.hermes-runtime")

project(${NAME} VERSION ${VERSION} LANGUAGES CXX)

set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)

# Platform selection based on the value of TARGET_PLATFORM

set(TARGET_PLATFORM "macos" CACHE STRING "Target platform for the NativeScriptRuntime")

if(TARGET_PLATFORM STREQUAL "ios")
  set(CMAKE_XCODE_ATTRIBUTE_IPHONEOS_DEPLOYMENT_TARGET "13.0")
  set(CMAKE_XCODE_ATTRIBUTE_TARGETED_DEVICE_FAMILY "1,2")
  set(CMAKE_XCODE_ATTRIBUTE_ENABLE_BITCODE "NO")
  set(CMAKE_OSX_DEPLOYMENT_TARGET "13.0")
  set(TARGET_PLATFORM_IOS TRUE)
  set(SDK_NAME "iphoneos")
  set(CMAKE_OSX_ARCHITECTURES "arm64")
  set(NS_BRIDGE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../packages/ios/build/ios/Release-iphoneos)
  set(TARGET_PLATFORM_SPEC "ios-arm64")
elseif(TARGET_PLATFORM STREQUAL "ios-sim")
  set(CMAKE_XCODE_ATTRIBUTE_IPHONEOS_DEPLOYMENT_TARGET "13.0")
  set(CMAKE_XCODE_ATTRIBUTE_TARGETED_DEVICE_FAMILY "1,2")
  set(CMAKE_XCODE_ATTRIBUTE_ENABLE_BITCODE "NO")
  set(CMAKE_OSX_DEPLOYMENT_TARGET "13.0")
  set(TARGET_PLATFORM_IOS TRUE)
  set(TARGET_PLATFORM_SIM TRUE)
  set(SDK_NAME "iphonesimulator")
  set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")
  set(NS_BRIDGE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../packages/ios/build/ios-sim/Release-iphonesimulator)
  set(TARGET_PLATFORM_SPEC "ios-arm64_x86_64-simulator")
elseif(TARGET_PLATFORM STREQUAL "macos")
  set(CMAKE_XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "13.0")
  set(CMAKE_OSX_DEPLOYMENT_TARGET "13.0")
  set(TARGET_PLATFORM_MACOS TRUE)
  set(SDK_NAME "macosx")
  set(CMAKE_OSX_ARCHITECTURES "arm64")
  set(NS_BRIDGE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../packages/macos/build/macos/Release)
  set(TARGET_PLATFORM_SPEC "macos-arm64_x86_64")
else()
  message(FATAL_ERROR "Unknown target platform: ${TARGET_PLATFORM}")
  return()
endif()

message(STATUS "TARGET_PLATFORM = ${TARGET_PLATFORM}")

# Find Xcode to determine the SDK path
# SDK name is determined by the target platform

find_program(XCODEBUILD_EXECUTABLE xcodebuild)

execute_process(
  COMMAND ${XCODEBUILD_EXECUTABLE} -version -sdk ${SDK_NAME} Path
  OUTPUT_VARIABLE CMAKE_OSX_SYSROOT_INT
  ERROR_QUIET
  OUTPUT_STRIP_TRAILING_WHITESPACE
)

set(CMAKE_OSX_SYSROOT_INT "${CMAKE_OSX_SYSROOT_INT}" CACHE INTERNAL "")
set(CMAKE_OSX_SYSROOT "${CMAKE_OSX_SYSROOT_INT}" CACHE INTERNAL "")

message(STATUS "SDK = ${CMAKE_OSX_SYSROOT}")

# Project sources

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
)

set(RT_SOURCE_FILES
  src/Console.cpp
  src/Runtime.cpp
  src/Require.cpp
  src/Performance.cpp
  src/Bundle.mm
  src/Timers.mm
)

# Define targets

# 1. NativeScriptRuntime: the framework that contains the runtime implementation
# using the Hermes engine.

add_library(
  NativeScriptRuntime
  SHARED
  ${RT_SOURCE_FILES}
)

set(PUBLIC_HEADERS
  "include/Runtime.h"
  "include/Require.h"
  "include/hermes"
  "include/jsi"
  "include/js_native_api.h"
  "include/js_native_api_types.h"
  "include/js_runtime_api.h"
)

target_sources(
  NativeScriptRuntime
  PRIVATE
  ${PUBLIC_HEADERS}
)

set_target_properties(
  NativeScriptRuntime PROPERTIES
  FRAMEWORK TRUE
  PUBLIC_HEADER "${PUBLIC_HEADERS}"
  VERSION ${VERSION}
  SOVERSION ${VERSION}
  MACOSX_FRAMEWORK_IDENTIFIER ${BUNDLE_IDENTIFIER}
  MACOSX_FRAMEWORK_BUNDLE_VERSION ${VERSION}
  MACOSX_FRAMEWORK_SHORT_VERSION_STRING ${VERSION}
  FRAMEWORK_VERSION ${VERSION}
)

target_link_options(
  NativeScriptRuntime
  PRIVATE
  -Wl,-rpath,@executable_path/../Frameworks
  -Wl,-rpath,${CMAKE_CURRENT_SOURCE_DIR}/Frameworks/hermes.xcframework/${TARGET_PLATFORM_SPEC}
  -Wl,-rpath,${NS_BRIDGE_PATH}
  -Wl,-F${NS_BRIDGE_PATH},-F${CMAKE_CURRENT_SOURCE_DIR}/Frameworks/hermes.xcframework/${TARGET_PLATFORM_SPEC}
)

if (TARGET_PLATFORM_MACOS)
  set(BRIDGE_BIN "-lNativeScript")

  target_link_options(
    NativeScriptRuntime
    PRIVATE
    -L${NS_BRIDGE_PATH}
  )
else()
  set(BRIDGE_BIN "-framework NativeScript")
endif()

target_link_libraries(
  NativeScriptRuntime
  PRIVATE
  ${BRIDGE_BIN}
  "-framework hermes"
  "-framework CoreFoundation"
)

# 2. charon: the executable/CLI that uses the runtime framework on macOS.

if(TARGET_PLATFORM_MACOS)
  add_executable(
    charon
    src/main.cpp
    src/Compiler.cpp
    src/segappend.cpp
  )

  target_link_options(
    charon
    PRIVATE
    -Wl,-rpath,@executable_path/../Frameworks
    -Wl,-rpath,${CMAKE_CURRENT_SOURCE_DIR}/Frameworks/hermes.xcframework/${TARGET_PLATFORM_SPEC}
    -Wl,-rpath,${NS_BRIDGE_PATH}
    -undefined dynamic_lookup
  )

  target_link_libraries(
    charon
    PRIVATE
    "NativeScriptRuntime"
  )
endif()
