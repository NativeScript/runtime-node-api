// @ts-check

import "@nativescript/macos-node-api";
import { MomentumValue, SpringParams } from "./MomentumValue.js";
import { remap } from "./DockUtils.js";

objc.import("AppKit");
objc.import("SpriteKit");

export class Ball extends SKNode {
  static {
    NativeClass(this);
  }

  /** @type {string} */
  id = "";

  imgOffsetContainer = SKNode.new();
  imgRotationContainer = SKNode.new();
  img = SKSpriteNode.spriteNodeWithTexture(
    SKTexture.textureWithImage(
      NSImage.alloc().initWithContentsOfFile(
        new URL("./assets/Ball.png", import.meta.url).pathname,
      ),
    ),
  );

  /** @type {number} */
  radius = 0;

  shadowSprite = SKSpriteNode.spriteNodeWithTexture(
    SKTexture.textureWithImage(
      NSImage.alloc().initWithContentsOfFile(
        new URL("./assets/ContactShadow.png", import.meta.url).pathname,
      ),
    ),
  );
  shadowContainer = SKNode.new(); // For fading in/out

  squish = new MomentumValue(1, 1000, new SpringParams(0.3, 0.5));
  dragScale = new MomentumValue(1, 1000, new SpringParams(0.2, 0.8));

  _beingDragged = false;

  /** @param {boolean} old */
  _beingDraggedDidSet(old) {
    if (this.beingDragged != old) {
      this.dragScale.animate(
        this.beingDragged ? 1.05 : 1,
        this.dragScale.velocity,
        null,
      );
    }
  }

  get beingDragged() {
    return this._beingDragged;
  }

  set beingDragged(value) {
    const old = this._beingDragged;
    this._beingDragged = value;
    this._beingDraggedDidSet(old);
  }

  /**
   * @param {number} radius
   * @param {CGPoint} pos
   * @param {string} id
   * @returns {this}
   */
  initWithRadiusPosId(radius, pos, id) {
    this.id = id;
    this.radius = radius;
    super.init();
    this.position = pos;

    const body = SKPhysicsBody.bodyWithCircleOfRadius(radius);
    body.isDynamic = true;
    body.restitution = 0.6;
    body.allowsRotation = false;
    body.usesPreciseCollisionDetection = true;
    body.contactTestBitMask = 1;
    this.physicsBody = body;

    this.addChild(this.shadowContainer);
    this.shadowContainer.addChild(this.shadowSprite);
    const shadowWidth = radius * 4;
    this.shadowSprite.size = {
      width: shadowWidth,
      height: 0.564 * shadowWidth,
    };
    this.shadowSprite.alpha = 0;
    this.shadowContainer.alpha = 0;

    this.addChild(this.imgOffsetContainer);
    this.imgOffsetContainer.addChild(this.imgRotationContainer);

    this.img.size = { width: radius * 2, height: radius * 2 };
    this.imgRotationContainer.addChild(this.img);

    return this;
  }

  /**
   * @param {NSCoder} _aDecoder
   * @returns {this}
   */
  initWithCoder(_aDecoder) {
    throw new Error("init(coder:) has not been implemented");
  }

  /**
   * @returns {CGRect}
   */
  get rect() {
    return {
      origin: {
        x: this.position.x - this.radius,
        y: this.position.y - this.radius,
      },
      size: { width: this.radius * 2, height: this.radius * 2 },
    };
  }

  /**
   * @param {boolean} visible
   * @param {number} duration
   */
  animateShadow(visible, duration) {
    if (visible) {
      this.shadowContainer.runAction(SKAction.fadeInWithDuration(duration));
    } else {
      this.shadowContainer.runAction(SKAction.fadeOutWithDuration(duration));
    }
  }

  update() {
    this.shadowSprite.position = {
      x: 0,
      y: this.radius * 0.3 - this.position.y,
    };
    const distFromBottom = this.position.y - this.radius;

    this.shadowSprite.alpha = remap(distFromBottom, 0, 200, 1, 0);
    this.imgRotationContainer.xScale = this.squish.value;

    const yDelta = -(1 - this.imgRotationContainer.xScale) * this.radius / 2;
    this.imgOffsetContainer.position = { x: 0, y: yDelta };

    this.img.setScale(this.dragScale.value);
  }

  /**
   * @param {number} strength
   * @param {CGVector} normal
   */
  didCollide(strength, normal) {
    const angle = Math.atan2(normal.dy, normal.dx);
    this.imgRotationContainer.zRotation = angle;
    this.img.zRotation = -angle;

    const targetScale = remap(strength, 0, 1, 1, 0.8);
    const velocity = remap(strength, 0, 1, -5, -10);
    this.squish.animate(targetScale, velocity, null);

    NSTimer.scheduledTimerWithTimeIntervalRepeatsBlock(
      0.01,
      false,
      () => {
        this.squish.animate(1, velocity, null);
      },
    );
  }
}
