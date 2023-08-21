import {
  CGRectGetMidX,
  CGRectGetMidY,
  NSMakePoint,
  NSMakeRect,
  NSMakeSize,
  objc,
} from "../index.js";

objc.import("SpriteKit");

export class ApplicationDelegate extends NSObject {
  static protocols = ["NSApplicationDelegate", "NSWindowDelegate"];

  static {
    objc.registerClass(this);
  }

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

    window.title = "SpriteKit";
    window.delegate = this;

    window.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
      118 / 255,
      171 / 255,
      235 / 255,
      1,
    );

    window.setAcceptsMouseMovedEvents(true);

    window.makeKeyAndOrderFront(this);
  }

  windowWillClose(_notification) {
    NSApp.terminate(this);
  }
}

export class BattlefieldScene extends SKScene {
  static protocols = ["SKPhysicsContactDelegate"];

  static {
    objc.registerClass(this);
  }

  didMoveToView(_view) {
    const indicatorHeight = 22;
    const indicatorSize = this.frame.size;
    indicatorSize.height = indicatorHeight;
    this.indicator = SKSpriteNode.alloc().initWithColorSize(
      NSColor.colorWithSRGBRedGreenBlueAlpha(0, 1, 0, 1),
      indicatorSize,
    );
    this.indicator.position = NSMakePoint(
      this.frame.size.width / 2,
      indicatorHeight / 2,
    );
    this.addChild(this.indicator);

    const heroSize = NSMakeSize(25, 25);
    this.hero = SKSpriteNode.alloc().initWithColorSize(
      NSColor.colorWithSRGBRedGreenBlueAlpha(0, 0, 1, 1),
      heroSize,
    );

    const heroPhysicsBody = SKPhysicsBody.bodyWithRectangleOfSize(heroSize);
    heroPhysicsBody.allowsRotation = true;
    heroPhysicsBody.allowsRotation = true;
    heroPhysicsBody.usesPreciseCollisionDetection = false;

    this.hero.physicsBody = heroPhysicsBody;
    this.heroHitCategory = 1;
    this.villainHitCategory = 2;
    this.hero.physicsBody.categoryBitMask = this.heroHitCategory;
    this.hero.physicsBody.contactTestBitMask = this.villainHitCategory;
    this.hero.physicsBody.collisionBitMask = this.villainHitCategory;

    const villainSize = NSMakeSize(50, 50);
    this.villain = SKSpriteNode.alloc().initWithColorSize(
      NSColor.colorWithSRGBRedGreenBlueAlpha(1, 0, 0, 1),
      villainSize,
    );

    const villainPhysicsBody = SKPhysicsBody.bodyWithRectangleOfSize(
      villainSize,
    );
    villainPhysicsBody.allowsRotation = true;
    villainPhysicsBody.allowsRotation = true;
    villainPhysicsBody.usesPreciseCollisionDetection = false;

    this.villain.physicsBody = villainPhysicsBody;
    this.villain.physicsBody.categoryBitMask = this.villainHitCategory;
    this.villain.physicsBody.contactTestBitMask = this.heroHitCategory;
    this.villain.physicsBody.collisionBitMask = this.heroHitCategory;

    this.hero.position = NSMakePoint(
      CGRectGetMidX(this.frame),
      3 * (CGRectGetMidY(this.frame) / 2),
    );

    this.villain.position = NSMakePoint(
      CGRectGetMidX(this.frame),
      CGRectGetMidY(this.frame) / 2,
    );

    this.heroTargetPos = this.hero.position;
    this.heroBaseSpeed = 5 / 1.5;
    this.villainBaseSpeed = 3 / 1.5;

    this.addChild(this.hero);
    this.addChild(this.villain);

    this.physicsWorld.gravity = NSMakePoint(0, 0);
    this.physicsWorld.contactDelegate = this;
  }

  diffFn(
    baseSpeed,
    currentPos,
    targetPos,
    deltaTime,
    currentRotationInRadians,
  ) {
    const xDiff = targetPos.x - currentPos.x;
    const yDiff = targetPos.y - currentPos.y;

    const angleInRadians = Math.atan2(yDiff, xDiff);
    const speed = baseSpeed / (1000 / deltaTime);
    const maxAdvanceX = Math.cos(angleInRadians) * (speed * deltaTime);
    const maxAdvanceY = Math.sin(angleInRadians) * (speed * deltaTime);

    const x = xDiff >= 0
      ? Math.min(
        currentPos.x + maxAdvanceX,
        targetPos.x,
      )
      : Math.max(
        currentPos.x + maxAdvanceX,
        targetPos.x,
      );
    const y = yDiff >= 0
      ? Math.min(
        currentPos.y + maxAdvanceY,
        targetPos.y,
      )
      : Math.max(
        currentPos.y + maxAdvanceY,
        targetPos.y,
      );

    const degToRad = Math.PI / 180;
    const radToDeg = 180 / Math.PI;
    const extraRotation = (angleInRadians * radToDeg) -
      (currentRotationInRadians * radToDeg);
    const easing = 4;

    const optimalRotation = extraRotation < -180 ? 360 + extraRotation : (
      extraRotation > 180 ? extraRotation - 360 : extraRotation
    );
    const optimalEasedRotation = optimalRotation / easing;
    const newRotationInDegrees =
      (currentRotationInRadians + optimalEasedRotation) % 360;

    return {
      point: NSMakePoint(x, y),
      rotation: newRotationInDegrees * degToRad,
    };
  }

  update(_currentTime) {
    const idealDeltaTime = 60;

    const forVillain = this.diffFn(
      this.villainBaseSpeed,
      this.villain.position,
      this.hero.position,
      idealDeltaTime,
      this.villain.zRotation,
    );
    const forHero = this.diffFn(
      this.heroBaseSpeed,
      this.hero.position,
      this.heroTargetPos,
      idealDeltaTime,
      this.hero.zRotation,
    );

    this.villain.zRotation = forVillain.rotation;
    this.villain.position = forVillain.point;

    this.hero.position = forHero.point;
    this.hero.zRotation = forVillain.rotation;
  }

  mouseDragged(theEvent) {
    this.heroTargetPos = theEvent.locationInNode(this);
  }

  didBeginContact(contact) {
    if (!contact.bodyA || !contact.bodyB) {
      return;
    }

    if (
      contact.bodyA.categoryBitMask === this.villainHitCategory ||
      contact.bodyB.categoryBitMask === this.villainHitCategory
    ) {
      this.indicator.color = NSColor.colorWithSRGBRedGreenBlueAlpha(
        1,
        0,
        0,
        1,
      );
    }
  }

  didEndContact(contact) {
    if (!contact.bodyA || !contact.bodyB) {
      return;
    }

    if (
      contact.bodyA.categoryBitMask === this.villainHitCategory ||
      contact.bodyB.categoryBitMask === this.villainHitCategory
    ) {
      this.indicator.color = NSColor.colorWithSRGBRedGreenBlueAlpha(
        0,
        1,
        0,
        1,
      );
    }
  }
}

export class ViewController extends NSViewController {
  static {
    objc.registerClass(this);
  }

  loadView() {
    this.view = SKView.alloc().initWithFrame(NSMakeRect(0, 0, 800, 600));
  }

  viewDidLoad() {
    super.viewDidLoad();

    const scene = BattlefieldScene.sceneWithSize(NSMakeSize(800, 600));

    scene.scaleMode = SKSceneScaleMode.aspectFill;

    this.view.presentScene(scene);

    this.view.preferredFramesPerSecond = 120;
    this.view.showsFPS = true;
    this.view.showsNodeCount = true;
    this.view.ignoresSiblingOrder = true;
  }
}

const NSApp = NSApplication.sharedApplication;
NSApp.setActivationPolicy(NSApplicationActivationPolicy.regular);

NSApp.delegate = ApplicationDelegate.new();

NSApp.activateIgnoringOtherApps(true);
NSApp.run();
