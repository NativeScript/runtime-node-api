cmake_minimum_required(VERSION 3.15)

set(NAME charon)
set(VERSION 0.1.0)

project(${NAME} VERSION ${VERSION} LANGUAGES CXX)

set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_CXX_STANDARD 20)

include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}/include
)

set(EXEC_SOURCE_FILES
  src/main.cpp
  src/Console.cpp
  src/Runtime.cpp
  src/segappend.cpp
  src/Compiler.cpp
)

add_executable(
  ${NAME}
  ${EXEC_SOURCE_FILES}
)

target_link_options(
  ${NAME}
  PRIVATE
  -Wl,-F${CMAKE_CURRENT_SOURCE_DIR}/Frameworks,-rpath,${CMAKE_CURRENT_SOURCE_DIR}/Frameworks
)

target_link_directories(
  ${NAME}
  PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}/../build/macos/Release
)

target_link_libraries(
  ${NAME}
  PRIVATE
  ObjCBridge
  "-framework hermes"
)
