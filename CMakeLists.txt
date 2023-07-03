cmake_minimum_required(VERSION 3.15)

set(BRIDGE_TARGET_PLATFORM "macos" CACHE STRING "Target platform for the Objective-C bridge")

project(ObjCBridge)

set(NAME ObjCBridge)
set(VERSION 0.1.0)

set(CMAKE_C_FLAGS "-fobjective-c")
set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)

set(BUILD_FRAMEWORK TRUE)

find_program(XCODEBUILD_EXECUTABLE xcodebuild)

if(BRIDGE_TARGET_PLATFORM STREQUAL "ios")
  set(CMAKE_XCODE_ATTRIBUTE_IPHONEOS_DEPLOYMENT_TARGET "13.0")
  set(CMAKE_XCODE_ATTRIBUTE_TARGETED_DEVICE_FAMILY "1,2")
  set(CMAKE_XCODE_ATTRIBUTE_ENABLE_BITCODE "NO")
  set(CMAKE_OSX_DEPLOYMENT_TARGET "13.0")
  set(LIBFFI_BUILD "build_iphoneos-arm64")
  set(TARGET_PLATFORM_IOS TRUE)
  set(SDK_NAME "iphoneos")
  set(CMAKE_OSX_ARCHITECTURES "arm64")
elseif(BRIDGE_TARGET_PLATFORM STREQUAL "ios-sim")
  set(CMAKE_XCODE_ATTRIBUTE_IPHONEOS_DEPLOYMENT_TARGET "13.0")
  set(CMAKE_XCODE_ATTRIBUTE_TARGETED_DEVICE_FAMILY "1,2")
  set(CMAKE_XCODE_ATTRIBUTE_ENABLE_BITCODE "NO")
  set(CMAKE_OSX_DEPLOYMENT_TARGET "13.0")
  set(LIBFFI_BUILD "build_iphonesimulator-universal")
  set(TARGET_PLATFORM_IOS TRUE)
  set(TARGET_PLATFORM_SIM TRUE)
  set(SDK_NAME "iphonesimulator")
  set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")
elseif(BRIDGE_TARGET_PLATFORM STREQUAL "macos")
  set(CMAKE_XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "13.0")
  set(CMAKE_OSX_DEPLOYMENT_TARGET "13.0")
  set(LIBFFI_BUILD "build_macosx-universal")
  set(TARGET_PLATFORM_MACOS TRUE)
  unset(BUILD_FRAMEWORK)
  set(SDK_NAME "macosx")
  set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")
else()
  message(FATAL_ERROR "Unknown target platform: ${BRIDGE_TARGET_PLATFORM}")
  return()
endif()

message(STATUS "BRIDGE_TARGET_PLATFORM = ${BRIDGE_TARGET_PLATFORM}")

execute_process(
  COMMAND ${XCODEBUILD_EXECUTABLE} -version -sdk ${SDK_NAME} Path
  OUTPUT_VARIABLE CMAKE_OSX_SYSROOT_INT
  ERROR_QUIET
  OUTPUT_STRIP_TRAILING_WHITESPACE
)

set(CMAKE_OSX_SYSROOT_INT "${CMAKE_OSX_SYSROOT_INT}" CACHE INTERNAL "")
set(CMAKE_OSX_SYSROOT "${CMAKE_OSX_SYSROOT_INT}" CACHE INTERNAL "")

message(STATUS "SDK = ${CMAKE_OSX_SYSROOT}")

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
  ${CMAKE_CURRENT_SOURCE_DIR}/libffi/${LIBFFI_BUILD}/include
  /Library/Developer/CommandLineTools/usr/include
)

set(LIB_SOURCE_FILES
  src/objc.mm
  src/bridge.mm
  src/class.mm
  src/closure.mm
  src/bridged_class.mm
  src/bridged_method.mm
  src/method_cif.mm
  src/objc_bridge_data.mm
  src/type_conv.mm
  src/util.mm
)

add_library(
  ${NAME}
  SHARED
  ${LIB_SOURCE_FILES}
)

set_target_properties(${NAME} PROPERTIES
  VERSION ${VERSION}
  SOVERSION ${VERSION}
  FRAMEWORK_VERSION ${VERSION}
  MACOSX_FRAMEWORK_SHORT_VERSION_STRING ${VERSION}
  MACOSX_FRAMEWORK_BUNDLE_VERSION ${VERSION}
  MACOSX_FRAMEWORK_IDENTIFIER com.nativescript.ObjCBridge-${BRIDGE_TARGET_PLATFORM}
)

if (BUILD_FRAMEWORK)
  message(STATUS "FRAMEWORK = TRUE")
  set_target_properties(${NAME} PROPERTIES
    FRAMEWORK TRUE
  )
endif()

if(TARGET_PLATFORM_MACOS)
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -DTARGET_PLATFORM_MACOS")

  add_custom_command(TARGET ${NAME} POST_BUILD
    COMMAND /usr/libexec/PlistBuddy -c "Add :LSMinimumSystemVersion string ${CMAKE_OSX_DEPLOYMENT_TARGET}" $<TARGET_FILE_DIR:${NAME}>/Resources/Info.plist
  )
endif()

message(STATUS "LIBFFI_BUILD = ${LIBFFI_BUILD}")

target_link_directories(
  ${NAME}
  PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}/libffi/${LIBFFI_BUILD}/.libs
)

target_link_libraries(
  ${NAME}
  PRIVATE
  objc
  ffi_convenience
  "-framework Foundation"
)

if(TARGET_PLATFORM_MACOS)
  target_link_libraries(
    ${NAME}
    PRIVATE
    "-framework AppKit"
  )
elseif(TARGET_PLATFORM_IOS)
  target_link_libraries(
    ${NAME}
    PRIVATE
    "-framework UIKit"
  )
endif()

target_link_options(
  ${NAME}
  PRIVATE
  "-Wl"
  "-undefined"
  "dynamic_lookup"
)
