cmake_minimum_required(VERSION 3.15)

project(objc_bridge)

set(NAME objc_bridge)

set(CMAKE_CXX_FLAGS "-Wall -Wextra")
set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
  ${CMAKE_CURRENT_SOURCE_DIR}/libffi/build/include
)

add_library(
  ${NAME}
  SHARED
  src/bridge.cc
  src/class.cc
  src/bridged_class.cc
  src/method_cif.cc
  src/objc_bridge_data.cc
  src/type_conv.cc
)

target_link_directories(
  ${NAME}
  PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}/libffi/build/lib
)

target_link_libraries(
  ${NAME}
  PRIVATE
  objc
  ffi
  "-framework Foundation"
)

target_link_options(
  ${NAME}
  PRIVATE
  "-Wl"
  "-undefined"
  "dynamic_lookup"
)
