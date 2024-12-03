#ifdef __APPLE__

#include "Bundle.h"

#include <Foundation/Foundation.h>

std::string getBundlePath() {
  NSBundle *mainBundle = [NSBundle mainBundle];
  NSString *bundlePath = [mainBundle bundlePath];
  return [bundlePath UTF8String];
}

std::string getBytecodePathFromBundle() {
  NSBundle *mainBundle = [NSBundle mainBundle];
  if ([mainBundle objectForInfoDictionaryKey:@"NativeScriptApplication"] ==
      nil) {
    return "";
  }
  NSString *bytecodePath = [mainBundle pathForResource:@"app" ofType:@"hbc"];
  if (bytecodePath == nil) {
    return "";
  }
  return [bytecodePath UTF8String];
}

#endif // __APPLE__
