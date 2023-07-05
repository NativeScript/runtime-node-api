cmake_minimum_required(VERSION 3.15)

set(NAME MetadataGenerator)
set(VERSION 0.1.0)

project(${NAME} VERSION ${VERSION} LANGUAGES CXX)

set(CMAKE_C_FLAGS "-fobjective-c")
set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)

set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
  ${CMAKE_CURRENT_SOURCE_DIR}/src
)

set(EXEC_SOURCE_FILES
  src/main.cpp
)

add_executable(
  ${NAME}
  ${EXEC_SOURCE_FILES}
)

target_link_directories(
  ${NAME}
  PRIVATE
  /Library/Developer/CommandLineTools/usr/lib
)

target_link_libraries(
  ${NAME}
  PRIVATE
  clang
)
