// We could alternatively write:
//   module.exports = require("./build/Release/NativeScript.apple.node")
//
// Either way, react-native-node-api/babel-plugin will rewrite it to:
//   module.exports = require("react-native-node-api").requireNodeAddon("-nativescript-ios-node-api—-NativeScript");

module.exports = require("bindings")("NativeScript");
