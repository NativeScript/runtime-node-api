/// <reference path="./inline_functions.d.ts" />

// It's a module
export {};

declare global {
  // deno-lint-ignore ban-types
  function NativeClass(cls: Function): void;

  class NativeObject implements interop.PointerObject {
    readonly __brand__: interop.PointerObject["__brand__"];
  }

  namespace objc {
    function importFramework(framework: string): void;
    export { importFramework as import };
    // deno-lint-ignore ban-types
    export function registerClass(cls: Function): void;
    export function registerBlock<T extends CallableFunction>(
      encoding: string,
      fn: T,
    ): T;
    export function autoreleasepool<T>(fn: () => T): T;
    export function getArrayBuffer(
      ptr: interop.Pointer,
      size: number,
    ): ArrayBuffer;
  }

  namespace interop {
    export type Type = number;

    export const types: {
      void: Type;
      bool: Type;
      int8: Type;
      uint8: Type;
      int16: Type;
      uint16: Type;
      int32: Type;
      uint32: Type;
      int64: Type;
      uint64: Type;
      float: Type;
      double: Type;
      UTF8CString: Type;
      unichar: Type;
      id: Type;
      protocol: Type;
      class: Type;
      SEL: Type;
      pointer: Type;
    };

    export interface PointerObject {
      readonly __brand__: unique symbol;
    }

    export class Pointer implements PointerObject {
      readonly __brand__: interop.PointerObject["__brand__"];

      constructor(address: number);

      add(offset: number): Pointer;
      subtract(offset: number): Pointer;
      toNumber(): number;
    }

    export type PointerConvertible =
      | PointerObject
      | ArrayBufferView
      | ArrayBuffer
      | null;

    // Sometimes when accepting an object pointer, we have no strong type info.
    // In which case practically any JS object is acceptable. Even JS class instances
    // since they get bridged in a special JSObject objc class.
    // Simple types like numbers, strings, arrays, object literals are also
    // converted to Objective-C equivalents.
    // deno-lint-ignore no-explicit-any
    export type Object = any;

    // deno-lint-ignore no-explicit-any
    export class Reference<T = any> implements PointerObject {
      readonly __brand__: interop.PointerObject["__brand__"];

      value: T;

      constructor(value: T);
      constructor(type: Type, value: T);
      constructor(type: Type, pointer: Pointer);
      constructor();
    }

    export type Enum<_T extends Record<string, number>> = number;

    export function addMethod<
      T extends abstract new (...args: unknown[]) => unknown,
    >(
      constructor: T,
      method: (this: InstanceType<T>, ...args: unknown[]) => unknown,
    ): void;
    export function addProtocol(
      constructor: unknown,
      protocol: PointerObject,
    ): void;
    export function adopt(ptr: Pointer): Pointer;
    export function free(ptr: Pointer): void;
    export function sizeof(obj: unknown): number;
    export function alloc(size: number): Pointer;
    export function handleof(obj: unknown): Pointer;
    export function bufferFromData(data: NativeObject): ArrayBuffer;
  }
}
