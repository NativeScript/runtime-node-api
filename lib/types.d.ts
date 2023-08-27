// deno-lint-ignore no-explicit-any
export type ObjCClasses = Record<string, any>;

export interface ObjC {
  import(framework: string): void;
  // deno-lint-ignore no-explicit-any
  registerClass(cls: any): void;
  // deno-lint-ignore no-explicit-any
  getClass(name: string): any;
  registerBlock<T extends CallableFunction>(encoding: string, fn: T): T;
  autoreleasepool<T>(fn: () => T): T;
}

export const classes: ObjCClasses;
export const objc: ObjC;

declare global {
  const objc: ObjC;
  const classes: ObjCClasses;
}
