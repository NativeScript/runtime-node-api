import "@nativescript/macos-node-api";

const adapter = await navigator.gpu.requestAdapter();
const device = await adapter!.requestDevice();

@NativeClass
export class ApplicationDelegate
  extends NSObject
  implements NSApplicationDelegate
{
  static ObjCProtocols = [NSApplicationDelegate];

  running = true;
  window: Window | null = null;

  applicationDidFinishLaunching(_notification: NSNotification) {
    this.window = Window.new();
  }

  applicationWillTerminate(_notification: NSNotification) {
    this.running = false;
  }
}

@NativeClass
export class Window extends NSWindow implements NSWindowDelegate {
  static ObjCProtocols = [NSWindowDelegate];

  surface!: Deno.UnsafeWindowSurface;
  context!: GPUCanvasContext;
  renderPipeline!: GPURenderPipeline;

  configure() {
    const { width, height } = this.convertRectToBacking(this.frame).size;

    this.surface = new Deno.UnsafeWindowSurface({
      system: "cocoa",
      windowHandle: Deno.UnsafePointer.create(
        BigInt(interop.handleof(this).toNumber())
      ),
      displayHandle: Deno.UnsafePointer.create(
        BigInt(interop.handleof(this.contentView).toNumber())
      ),
      width,
      height,
    });

    this.context = this.surface.getContext("webgpu");

    this.context.configure({
      device,
      format: "bgra8unorm",
    });
  }

  override init() {
    const menu = NSMenu.new();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.new();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.new();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    super.initWithContentRectStyleMaskBackingDefer(
      { origin: { x: 0, y: 0 }, size: { width: 500, height: 500 } },
      NSWindowStyleMask.Titled |
        NSWindowStyleMask.Closable |
        NSWindowStyleMask.Miniaturizable |
        NSWindowStyleMask.Resizable,
      2,
      false
    );

    this.title = "NativeScript for macOS";
    this.delegate = this;

    this.isReleasedWhenClosed = false;

    this.configure();

    const shaderCode = `
@vertex
fn vs_main(@builtin(vertex_index) in_vertex_index: u32) -> @builtin(position) vec4<f32> {
  let x = f32(i32(in_vertex_index) - 1);
  let y = f32(i32(in_vertex_index & 1u) * 2 - 1);
  return vec4<f32>(x, y, 0.0, 1.0);
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
  return vec4<f32>(1.0, 0.0, 0.0, 1.0);
}
`;

    const shaderModule = device.createShaderModule({
      code: shaderCode,
    });

    const pipelineLayout = device.createPipelineLayout({
      bindGroupLayouts: [],
    });

    this.renderPipeline = device.createRenderPipeline({
      layout: pipelineLayout,
      vertex: {
        module: shaderModule,
        entryPoint: "vs_main",
      },
      fragment: {
        module: shaderModule,
        entryPoint: "fs_main",
        targets: [
          {
            format: "bgra8unorm",
          },
        ],
      },
    });

    NSApp.activateIgnoringOtherApps(true);

    this.makeKeyAndOrderFront(NSApp);

    this.center();

    return this;
  }

  render() {
    const encoder = device.createCommandEncoder();
    const texture = this.context.getCurrentTexture().createView();
    const renderPass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: texture,
          storeOp: "store",
          loadOp: "clear",
          clearValue: { r: 0, g: 0, b: 0, a: 1.0 },
        },
      ],
    });
    renderPass.setPipeline(this.renderPipeline);
    renderPass.draw(3, 1);
    renderPass.end();
    device.queue.submit([encoder.finish()]);
    this.surface.present();
  }

  windowDidResize(_notification: NSNotification): void {
    this.configure();
    this.render();
  }

  windowWillClose(_notification: NSNotification) {
    NSApp.terminate(this);
  }
}

const NSApp = NSApplication.sharedApplication;

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

const delegate = ApplicationDelegate.new();

NSApp.delegate = delegate;

NSApp.finishLaunching();

while (true) {
  const event = NSApp.nextEventMatchingMaskUntilDateInModeDequeue(
    NSEventMask.Any,
    null,
    "kCFRunLoopDefaultMode",
    true
  );

  if (event != null) {
    NSApp.sendEvent(event);
  }

  if (!delegate.running) {
    break;
  }

  delegate.window?.render();
}
