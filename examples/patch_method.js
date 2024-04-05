import "@nativescript/macos-node-api";

class AppDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate];

  static {
    NativeClass(this);
  }

  applicationDidFinishLaunching() {
    console.log("applicationDidFinishLaunching");
  }
}

const app = NSApplication.sharedApplication;
app.delegate = AppDelegate.new();

app.delegate.applicationDidFinishLaunching = () => {
  console.log("applicationDidFinishLaunching 2");
};

NSApplicationMain(0, null);
