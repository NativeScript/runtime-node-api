require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "NativeScript"
  s.version      = package['version']
  s.summary      = "An embeddable, engine-agnostic NativeScript runtime for iOS based on Node-API"
  s.homepage     = "https://github.com/NativeScript/runtime-node-api.git"
  s.author       = "DjDeveloperr", "Jamie Birch"
  s.source       = { git: '' }
  s.vendored_frameworks = "build/ios-universal/NativeScript.xcframework"
  s.platform = :ios, '13.4'
end
