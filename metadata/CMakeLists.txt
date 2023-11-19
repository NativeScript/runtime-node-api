cmake_minimum_required(VERSION 3.15)

set(NAME MetadataGenerator)
set(VERSION 0.1.0)

project(${NAME} VERSION ${VERSION} LANGUAGES CXX)

set(CMAKE_C_FLAGS "-fobjective-c")
set(CMAKE_CXX_FLAGS "-Wall -Wextra")
set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)

set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
)

set(EXEC_SOURCE_FILES
  src/main.cpp
  src/IR/Category.cpp
  src/IR/Class.cpp
  src/IR/Enum.cpp
  src/IR/Factory.cpp
  src/IR/Function.cpp
  src/IR/Member.cpp
  src/IR/Protocol.cpp
  src/IR/Record.cpp
  src/IR/TypeSpec.cpp
  src/IR/Variable.cpp
  src/TSEmitter/Class.cpp
  src/TSEmitter/Emitter.cpp
  src/TSEmitter/Enum.cpp
  src/TSEmitter/Function.cpp
  src/TSEmitter/Member.cpp
  src/TSEmitter/Protocol.cpp
  src/TSEmitter/Record.cpp
  src/TSEmitter/TypeSpec.cpp
  src/TSEmitter/Variable.cpp
  src/MetadataWriter/Class.cpp
  src/MetadataWriter/Enum.cpp
  src/MetadataWriter/Function.cpp
  src/MetadataWriter/Member.cpp
  src/MetadataWriter/Protocol.cpp
  src/MetadataWriter/Record.cpp
  src/MetadataWriter/TypeSpec.cpp
  src/MetadataWriter/Variable.cpp
  src/MetadataWriter/Writer.cpp
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
