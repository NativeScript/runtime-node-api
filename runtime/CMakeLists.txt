cmake_minimum_required(VERSION 3.15)

set(NAME charon)
set(VERSION 0.1.0)

project(${NAME} VERSION ${VERSION} LANGUAGES CXX)

set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_OBJCXX_STANDARD 20)

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
)

set(RT_SOURCE_FILES
  src/Console.cpp
  src/Runtime.cpp
  src/segappend.cpp
  src/Compiler.cpp
  src/Require.cpp
  src/Performance.cpp
)

add_executable(
  ${NAME}
  src/main.cpp
  ${RT_SOURCE_FILES}
)

add_library(
  NativeScriptRuntime
  SHARED
  ${RT_SOURCE_FILES}
)

target_sources(
  NativeScriptRuntime
  PRIVATE
  "include/Console.h;include/Runtime.h;include/Compiler.h;include/Require.h;include/Performance.h"
)

set_target_properties(NativeScriptRuntime PROPERTIES
  FRAMEWORK TRUE
  PUBLIC_HEADER "include/Console.h;include/Runtime.h;include/Compiler.h;include/Require.h;include/Performance.h"
)

target_link_options(
  NativeScriptRuntime
  PRIVATE
  -Wl,-F${CMAKE_CURRENT_SOURCE_DIR}/Frameworks,-rpath,${CMAKE_CURRENT_SOURCE_DIR}/Frameworks
)

target_link_directories(
  NativeScriptRuntime
  PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}/../packages/macos/build/macos/Release
)

target_link_libraries(
  NativeScriptRuntime
  PRIVATE
  NativeScript
  "-framework hermes"
)

target_link_options(
  ${NAME}
  PRIVATE
  -undefined dynamic_lookup
)

target_link_libraries(
  ${NAME}
  PRIVATE
  NativeScriptRuntime
)
