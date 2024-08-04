// @ts-check

import "@nativescript/macos-node-api";

objc.import("AppKit");
objc.import("SpriteKit");

import { AppDelegate } from "./AppDelegate.js";

const NSApp = NSApplication.sharedApplication;

NSApp.delegate = AppDelegate.new();

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

NSApplicationMain(0, null);
