#ifdef TARGET_PLATFORM_MACOS

#import <AppKit/AppKit.h>

// TODO: Figure this out...
// Any other way to get protocols like this to be available at runtime?
extern "C" Protocol *getNSApplicationDelegateProtocol() {
  return @protocol(NSApplicationDelegate);
}

extern "C" Protocol *getNSOutlineViewDataSourceProtocol() {
  return @protocol(NSOutlineViewDataSource);
}

extern "C" Protocol *getNSOutlineViewDelegateProtocol() {
  return @protocol(NSOutlineViewDelegate);
}

#endif
