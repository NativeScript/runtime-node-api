// @ts-check

import "@nativescript/macos-node-api";
import { Ball } from "./Ball.js";
import { RADIUS } from "./AppController.js";
import { byConstrainingWithinBounds, remap } from "./DockUtils.js";

class DragState {
  /**
   * @param {CGPoint} ballStart
   * @param {CGPoint} mouseStart
   * @param {CGPoint} currentMousePos
   */
  constructor(ballStart, mouseStart, currentMousePos) {
    this.ballStart = ballStart;
    this.mouseStart = mouseStart;
    this.currentMousePos = currentMousePos;
    this.velocityTracker = new VelocityTracker();
  }

  get currentBallPos() {
    const delta = {
      x: this.currentMousePos.x - this.mouseStart.x,
      y: this.currentMousePos.y - this.mouseStart.y,
    };
    return {
      x: this.ballStart.x + delta.x,
      y: this.ballStart.y + delta.y,
    };
  }
}

export class BallViewController extends NSViewController {
  static ObjCProtocols = [SKSceneDelegate, SKPhysicsContactDelegate];

  static {
    NativeClass(this);
  }

  /** @type {NSObject | undefined} */
  delegate;

  scene = SKScene.sceneWithSize({ width: 200, height: 200 });
  sceneView = SKView.new();

  /** @type {NSSound[]} */
  collisionSounds = ["pop_01", "pop_02", "pop_03"].map((id) =>
    NSSound.alloc().initWithContentsOfFileByReference(
      new URL(`./assets/${id}.caf`, import.meta.url).pathname,
      true,
    )
  );

  get targetMouseCatcherRect() {
    const rect = this.tempOverrideMouseCatcherRect ?? this.ball?.rect;
    const win = this.view.window;
    if (rect && win) {
      return win.convertRectToScreen(rect);
    }
    return undefined;
  }

  /** @type {CGRect | undefined} */
  tempOverrideMouseCatcherRect;

  /** @type {Ball | undefined} */
  _ball;

  /** @param {Ball | undefined} old */
  _ballDidSet(old) {
    old?.removeFromParent();
    // @ts-expect-error it can be null
    if (old) old.physicsBody = null;
    if (this._ball) {
      this.scene.addChild(this._ball);
    }
  }

  get ball() {
    return this._ball;
  }

  set ball(ball) {
    const old = this._ball;
    this._ball = ball;
    this._ballDidSet(old);
  }

  loadView() {
    this.view = NSView.alloc().initWithFrame({
      origin: { x: 0, y: 0 },
      size: { width: 480, height: 270 },
    });
  }

  viewDidLoad() {
    super.viewDidLoad();

    this.view.addSubview(this.sceneView);
    this.sceneView.presentScene(this.scene);
    this.scene.backgroundColor = NSColor.clearColor;
    this.sceneView.allowsTransparency = true;

    this.sceneView.preferredFramesPerSecond = 120;
    this.scene.physicsWorld.contactDelegate = this;
    this.scene.delegate = this;

    for (const sound of this.collisionSounds) {
      sound.volume = 0;
      sound.play(); // Ensure ready to play
    }
  }

  viewDidLayout() {
    super.viewDidLayout();
    this.scene.size = this.view.bounds.size;
    this.sceneView.frame = this.view.bounds;
    this.scene.physicsBody = SKPhysicsBody.bodyWithEdgeLoopFromRect(
      this.view.bounds,
    );
    this.scene.physicsBody.contactTestBitMask = 1;
  }

  // MARK: - Mouse handling

  /**
   * @type {DragState | undefined}
   */
  _dragState;

  /**
   * @param {DragState | undefined} _old
   */
  dragStateDidSet(_old) {
    if (this._dragState && this.ball) {
      this.ball.physicsBody.isDynamic = false;

      const pos = this._dragState.currentBallPos;

      const constrainedRect = byConstrainingWithinBounds(
        {
          origin: { x: pos.x - this.ball.radius, y: pos.y - this.ball.radius },
          size: { width: this.ball.radius * 2, height: this.ball.radius * 2 },
        },
        this.view.bounds,
      );

      this.ball.position = {
        x: CGRectGetMidX(constrainedRect),
        y: CGRectGetMidY(constrainedRect),
      };
    } else if (this.ball) {
      this.ball.physicsBody.isDynamic = true;
    }

    if (this.ball) {
      this.ball.beingDragged = this._dragState ? true : false;
    }
  }

  get dragState() {
    return this._dragState;
  }

  set dragState(dragState) {
    const old = this._dragState;
    this._dragState = dragState;
    this.dragStateDidSet(old);
  }

  onMouseDown() {
    const scenePos = this.mouseScenePos;
    if (this.ball && this.ball.containsPoint(scenePos)) {
      this.dragState = new DragState(this.ball.position, scenePos, scenePos);
    } else {
      this.dragState = undefined;
    }
  }

  onMouseDrag() {
    if (this.dragState) {
      this.dragState.currentMousePos = this.mouseScenePos;
      this.dragState.velocityTracker.add(this.dragState.currentMousePos);
      this.dragStateDidSet(this.dragState);
    }
  }

  onMouseUp() {
    const velocity = this.dragState?.velocityTracker.velocity ?? CGPointZero;
    this.dragState = undefined;

    if (CGPointGetLength(velocity) > 0) {
      this.ball?.physicsBody?.applyImpulse({ dx: velocity.x, dy: velocity.y });
    }
  }

  /**
   * @param {NSEvent} event
   */
  onScroll(event) {
    switch (event.phase) {
      case NSEventPhase.Began:
        if (this.ball) {
          this.dragState = new DragState(
            this.ball.position,
            CGPointZero,
            CGPointZero,
          );
          this.tempOverrideMouseCatcherRect = this.targetMouseCatcherRect;
        }
        break;
      case NSEventPhase.Changed:
        if (this.dragState) {
          this.dragState.currentMousePos.x += event.scrollingDeltaX;
          this.dragState.currentMousePos.y -= event.scrollingDeltaY;
          this.dragState.velocityTracker.add(this.dragState.currentMousePos);
          this.dragStateDidSet(this.dragState);
        }
        break;
      case NSEventPhase.Ended:
      case NSEventPhase.Cancelled: {
        const velocity = this.dragState?.velocityTracker.velocity ??
          CGPointZero;
        this.dragState = undefined;

        if (CGPointGetLength(velocity) > 0) {
          this.ball?.physicsBody?.applyImpulse({
            dx: velocity.x,
            dy: velocity.y,
          });
        }

        this.tempOverrideMouseCatcherRect = undefined;
        break;
      }
      default:
        break;
    }
  }

  /**
   * @returns {CGPoint}
   */
  get mouseScenePos() {
    const viewPos = this.sceneView.convertPointFromView(
      this.view.window.mouseLocationOutsideOfEventStream,
      null,
    );
    const scenePos = this.scene.convertPointFromView(viewPos);
    return scenePos;
  }

  // MARK: - Animations

  /**
   * @param {CGRect} rect
   */
  animateBallFromRect(rect) {
    const screen = this.view.window?.screen;
    if (!screen) {
      return;
    }

    const targetRect = byConstrainingWithinBounds(rect, screen.frame);

    const ball = Ball.alloc().initWithRadiusPosId(
      RADIUS,
      {
        x: CGRectGetMidX(targetRect),
        y: CGRectGetMidY(targetRect),
      },
      crypto.randomUUID(),
    );
    this.ball = ball;

    this.dragState = undefined;

    // Add impulse to fling ball to center of screen
    const strength = 2000;
    const impulse = { dx: 0, dy: 0 };

    const distFromLeft = CGRectGetMidX(targetRect) -
      CGRectGetMinX(screen.frame);
    const distFromRight = CGRectGetMaxX(screen.frame) -
      CGRectGetMidX(targetRect);
    const distFromBottom = CGRectGetMidY(targetRect) -
      CGRectGetMinY(screen.frame);

    if (distFromBottom < 200) {
      impulse.dy = strength;
    }

    if (distFromLeft < 200) {
      impulse.dx = strength;
    } else if (distFromRight < 200) {
      impulse.dx = -strength;
    }

    ball.setScale(rect.size.width / (ball.radius * 2));
    const scaleUp = SKAction.scaleToDuration(1, 0.5);
    ball.runAction(scaleUp);

    ball.animateShadow(true, 0.5);

    this.nextRenderBlocks.push(() => {
      ball.position = {
        x: CGRectGetMidX(targetRect),
        y: CGRectGetMidY(targetRect),
      };

      ball.physicsBody?.applyImpulse(impulse);
    });
  }

  /**
   * @param {CGRect} rect
   * @param {() => void} completion
   */
  animatePutBack(rect, completion) {
    const ball = this.ball;
    if (!ball) {
      completion();
      return;
    }
    this.dragState = undefined;

    if (ball.physicsBody) {
      ball.physicsBody.isDynamic = false;
      ball.physicsBody.affectedByGravity = false;
      ball.physicsBody.velocity = { dx: 0, dy: 0 };
    }

    const scale = SKAction.scaleToDuration(
      rect.size.width / (ball.radius * 2),
      0.25,
    );
    ball.animateShadow(false, 0.25);
    ball.runAction(scale);
    const move = SKAction.moveToDuration({
      x: CGRectGetMidX(rect),
      y: CGRectGetMidY(rect),
    }, 0.25);
    ball.runActionCompletion(move, () => {
      this.ball = undefined;
      completion();
    });
  }

  /**
   * @type {(() => void)[]}
   */
  nextRenderBlocks = [];

  // MARK: - SKSceneDelegate

  /**
   * @param {number} _currentTime
   * @param {SKScene} _scene
   */
  updateForScene(_currentTime, _scene) {
    if (this.ball) {
      // @ts-ignore it exists as a JS method on the delegate object
      this.delegate?.ballViewControllerBallDidMoveToPosition(
        this,
        this.ball.rect,
      );
    }
  }

  /**
   * @param {SKScene} _scene
   */
  didSimulatePhysicsForScene(_scene) {
    const blocks = this.nextRenderBlocks;
    this.nextRenderBlocks = [];
    for (const block of blocks) {
      block();
    }
  }

  /**
   * @param {SKScene} _scene
   */
  didFinishUpdateForScene(_scene) {
    if (this.ball) {
      this.ball.update();
    }
  }

  // MARK: - SKPhysicsContactDelegate

  /**
   * @param {SKPhysicsContact} contact
   * @returns
   */
  didBeginContact(contact) {
    const minImpulse = 1000;
    const maxImpulse = 2000;

    const collisionStrength = remap(
      contact.collisionImpulse,
      minImpulse,
      maxImpulse,
      0,
      0.5,
    );
    if (collisionStrength <= 0) return;

    this.ball?.didCollide(collisionStrength, contact.contactNormal);

    NSOperationQueue.mainQueue.addOperationWithBlock(() => {
      const sounds = this.collisionSounds;
      const soundsUsable = sounds.filter((sound) => !sound.isPlaying);
      if (soundsUsable.length === 0) return;
      const randomSound =
        soundsUsable[Math.floor(Math.random() * soundsUsable.length)];
      randomSound.volume = collisionStrength;
      randomSound.play();
    });
  }
}

/**
 * @param {NSView} view
 * @param {CGPoint} pt
 */
export function NSViewSetCenter(view, pt) {
  view.frame = new CGRect({
    origin: {
      x: pt.x - view.bounds.size.width / 2,
      y: pt.y - view.bounds.size.height / 2,
    },
    size: {
      width: view.bounds.size.width,
      height: view.bounds.size.height,
    },
  });
}

/**
 * @param {CGPoint} point
 * @returns {number}
 */
export function CGPointGetLength(point) {
  return Math.sqrt(point.x * point.x + point.y * point.y);
}

export class Sample {
  /** @type {number} */
  time;
  /** @type {CGPoint} */
  pos;

  /**
   * @param {number} time
   * @param {CGPoint} pos
   */
  constructor(time, pos) {
    this.time = time;
    this.pos = pos;
  }
}

export class VelocityTracker {
  /** @type {Sample[]} */
  samples = [];

  /**
   * @param {CGPoint} pos
   */
  add(pos) {
    const time = CACurrentMediaTime();
    const sample = new Sample(time, pos);
    this.samples.push(sample);
    this.samples = this.filteredSamples;
  }

  get filteredSamples() {
    const time = CACurrentMediaTime();
    const filtered = this.samples.filter((sample) => time - sample.time < 0.1);
    return filtered;
  }

  get velocity() {
    const samples = this.filteredSamples;
    if (samples.length < 2) {
      return CGPointZero;
    }
    const first = samples[0];
    const last = samples[samples.length - 1];
    const delta = {
      x: last.pos.x - first.pos.x,
      y: last.pos.y - first.pos.y,
    };
    const time = last.time - first.time;
    return new CGPoint({
      x: delta.x / time,
      y: delta.y / time,
    });
  }
}
