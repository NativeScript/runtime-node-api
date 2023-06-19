import classes from "../index.js";

const {
  NSApplication,
  NSWindow,
  NSString,
  NSMenu,
  NSMenuItem,
  NSTextField,
  NSImage,
  NSImageView,
  NSColor,
  NSFont,
  NSFontManager,
  NSStackView,
} = classes;

const NSApp = NSApplication.sharedApplication();
NSApp.setActivationPolicy_(0);

const window = NSWindow.alloc().initWithContentRect_styleMask_backing_defer_(
  new Float64Array([
    100,
    100,
    500,
    500,
  ]),
  1 | 2 | 4 | 8,
  2,
  false,
);

window.setTitle_(NSString.stringWithUTF8String_("NativeScript on macOS"));

const label = NSTextField.alloc().initWithFrame_(
  new Float64Array([0, 0, 390, 100]),
);

label.setStringValue_(NSString.stringWithUTF8String_("Hello, macOS"));

label.setBezeled_(false);
label.setDrawsBackground_(false);
label.setEditable_(false);
label.setSelectable_(false);
label.setAlignment_(1 /* NSTextAlignmentCenter */);
label.setTranslatesAutoresizingMaskIntoConstraints_(false);
label.setTextColor_(NSColor.colorWithSRGBRed_green_blue_alpha_(1, 1, 1, 1));

label.setFont_(
  NSFontManager.sharedFontManager().convertFont_toHaveTrait_(
    NSFont.fontWithName_size_(label.font().fontName(), 45),
    2, /* NSBoldFontMask */
  ),
);

label.sizeToFit();

const vstack = NSStackView.alloc().initWithFrame_(
  new Float64Array([0, 0, 500, 500]),
);

vstack.setOrientation_(1 /* NSUserInterfaceLayoutOrientationVertical */);
vstack.setAlignment_(9 /* NSLayoutAttributeCenterX */);
vstack.setDistribution_(0 /* NSStackViewDistributionFill */);
vstack.setSpacing_(40);
vstack.setTranslatesAutoresizingMaskIntoConstraints_(false);

const image = NSImage.alloc().initWithContentsOfFile_(
  NSString.stringWithUTF8String_(
    new URL("../assets/NativeScript.png", import.meta.url).pathname,
  ),
);

image.setSize_(new Float64Array([128, 128]));

const imageView = NSImageView.imageViewWithImage_(image);

vstack.addView_inGravity_(
  imageView,
  2, /* NSStackViewGravityCenter */
);
vstack.addView_inGravity_(label, 2 /* NSStackViewGravityCenter */);

window.contentView().addSubview_(vstack);

vstack.centerXAnchor().constraintEqualToAnchor_(
  window.contentView().centerXAnchor(),
).setActive_(true);
vstack.centerYAnchor().constraintEqualToAnchor_(
  window.contentView().centerYAnchor(),
).setActive_(true);

window.setBackgroundColor_(NSColor.colorWithSRGBRed_green_blue_alpha_(
  118 / 255,
  171 / 255,
  235 / 255,
  1,
));

window.center();
window.makeKeyAndOrderFront_(NSApp);
window.setReleasedWhenClosed_(false);

NSApp.activateIgnoringOtherApps_(true);

const menu = NSMenu.alloc().init();
NSApp.setMainMenu_(menu);

const appMenuItem = NSMenuItem.alloc().init();
menu.addItem_(appMenuItem);

const appMenu = NSMenu.alloc().init();
appMenuItem.setSubmenu_(appMenu);

appMenu.addItemWithTitle_action_keyEquivalent_(
  NSString.stringWithUTF8String_("Quit"),
  "terminate:",
  NSString.stringWithUTF8String_("q"),
);

NSApp.run();
