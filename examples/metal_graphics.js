// @ts-check

// https://developer.apple.com/documentation/metal/using_a_render_pipeline_to_render_primitives?language=objc

import "objc";

objc.import("Metal");
objc.import("MetalKit");

export class ApplicationDelegate extends NSObject {
  static ObjCProtocols = [NSApplicationDelegate, NSWindowDelegate];

  static {
    NativeClass(this);
  }

  /**
   * @param {NSNotification} _notification
   */
  applicationDidFinishLaunching(_notification) {
    const menu = NSMenu.new();
    NSApp.mainMenu = menu;

    const appMenuItem = NSMenuItem.new();
    menu.addItem(appMenuItem);

    const appMenu = NSMenu.new();
    appMenuItem.submenu = appMenu;

    appMenu.addItemWithTitleActionKeyEquivalent("Quit", "terminate:", "q");

    const controller = ViewController.new();
    const window = NSWindow.windowWithContentViewController(controller);

    window.title = "NativeScript for macOS";
    window.delegate = this;
    window.styleMask = NSWindowStyleMask.Titled | NSWindowStyleMask.Closable |
      NSWindowStyleMask.Miniaturizable | NSWindowStyleMask.Resizable;

    window.titlebarAppearsTransparent = true;
    window.titleVisibility = NSWindowTitleVisibility.Hidden;

    window.makeKeyAndOrderFront(this);

    NSApp.activateIgnoringOtherApps(false);
  }

  /**
   * @param {NSNotification} _notification
   */
  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

// deno-fmt-ignore
const vertices = new Float32Array([
  250,  -250,  0, 0,  1, 0, 0, 1,
 -250,  -250,  0, 0,  0, 1, 0, 1,
    0,   250,  0, 0,  0, 0, 1, 1,
]);

/**
 * @implements {MTKViewDelegate}
 */
export class Renderer extends NSObject {
  static ObjCProtocols = [MTKViewDelegate];

  static {
    NativeClass(this);
  }

  /** @type {MTLDevice} */
  device;
  /** @type {MTLRenderPipelineState} */
  pipelineState;
  /** @type {MTLCommandQueue} */
  commandQueue;
  /** @type {Uint32Array} */
  viewportSize;

  /**
   * @param {MTKView} mtkView
   */
  initWithMtkView(mtkView) {
    this.device = mtkView.device;

    const error = new interop.Reference();
    const library = this.device.newLibraryWithSourceOptionsError(
      `
#ifndef AAPLShaderTypes_h
#define AAPLShaderTypes_h

#include <simd/simd.h>

typedef enum AAPLVertexInputIndex
{
    AAPLVertexInputIndexVertices     = 0,
    AAPLVertexInputIndexViewportSize = 1,
} AAPLVertexInputIndex;

typedef struct
{
    vector_float2 position;
    vector_float4 color;
} AAPLVertex;

#endif /* AAPLShaderTypes_h */

#include <metal_stdlib>

using namespace metal;

struct RasterizerData
{
    float4 position [[position]];
    float4 color;
};

vertex RasterizerData
vertexShader(uint vertexID [[vertex_id]],
             constant AAPLVertex *vertices [[buffer(AAPLVertexInputIndexVertices)]],
             constant vector_uint2 *viewportSizePointer [[buffer(AAPLVertexInputIndexViewportSize)]])
{
    RasterizerData out;

    float2 pixelSpacePosition = vertices[vertexID].position.xy;

    vector_float2 viewportSize = vector_float2(*viewportSizePointer);

    out.position = vector_float4(0.0, 0.0, 0.0, 1.0);
    out.position.xy = pixelSpacePosition / (viewportSize / 2.0);

    out.color = vertices[vertexID].color;

    return out;
}

fragment float4 fragmentShader(RasterizerData in [[stage_in]])
{
    return in.color;
}

`,
      null,
      error,
    );

    if (!library) {
      console.log(error.value);
      throw new Error("Failed to create library");
    }

    const vertexFunction = library.newFunctionWithName("vertexShader");
    const fragmentFunction = library.newFunctionWithName("fragmentShader");

    const descriptor = MTLRenderPipelineDescriptor.new();
    descriptor.vertexFunction = vertexFunction;
    descriptor.fragmentFunction = fragmentFunction;
    descriptor.colorAttachments.objectAtIndexedSubscript(0).pixelFormat =
      mtkView.colorPixelFormat;

    this.pipelineState = this.device.newRenderPipelineStateWithDescriptorError(
      descriptor,
      error,
    );

    if (!this.pipelineState) {
      console.log(error.value);
      throw new Error("Failed to create pipeline state");
    }

    this.commandQueue = this.device.newCommandQueue();

    this.viewportSize = new Uint32Array([
      mtkView.drawableSize.width,
      mtkView.drawableSize.height,
    ]);

    return this;
  }

  /**
   * @param {MTKView} _view
   * @param {CGSize} size
   */
  mtkViewDrawableSizeWillChange(_view, size) {
    this.viewportSize[0] = size.width;
    this.viewportSize[1] = size.height;
  }

  /**
   * @param {MTKView} view
   */
  drawInMTKView(view) {
    const commandBuffer = this.commandQueue.commandBuffer();
    commandBuffer.label = "MyCommand";

    const renderPassDescriptor = view.currentRenderPassDescriptor;

    if (renderPassDescriptor !== null) {
      const renderEncoder = commandBuffer.renderCommandEncoderWithDescriptor(
        renderPassDescriptor,
      );
      renderEncoder.label = "MyRenderEncoder";

      renderEncoder.setViewport({
        originX: 0,
        originY: 0,
        width: this.viewportSize[0],
        height: this.viewportSize[1],
        znear: 0,
        zfar: 1.,
      });

      renderEncoder.setRenderPipelineState(this.pipelineState);

      renderEncoder.setVertexBytesLengthAtIndex(
        vertices,
        vertices.byteLength,
        0,
      );

      renderEncoder.setVertexBytesLengthAtIndex(
        this.viewportSize,
        this.viewportSize.byteLength,
        1,
      );

      renderEncoder.drawPrimitivesVertexStartVertexCount(
        MTLPrimitiveType.Triangle,
        0,
        3,
      );

      renderEncoder.endEncoding();

      commandBuffer.presentDrawable(view.currentDrawable);
    }

    commandBuffer.commit();
  }
}

export class ViewController extends NSViewController {
  static {
    NativeClass(this);
  }

  /** @type {MTKView} */
  mtkView;

  loadView() {
    this.mtkView = this.view = MTKView.alloc().initWithFrameDevice(
      {
        origin: { x: 0, y: 0 },
        size: { width: 480, height: 480 },
      },
      MTLCreateSystemDefaultDevice(),
    );
  }

  viewDidLoad() {
    super.viewDidLoad();

    this.renderer = Renderer.new().initWithMtkView(this.mtkView);

    this.mtkView.delegate = this.renderer;
  }
}

const NSApp = NSApplication.sharedApplication;

NSApp.delegate = ApplicationDelegate.new();

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);

NSApplicationMain(0, null);
