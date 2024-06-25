import type { Equal, Expect } from "@type-challenges/utils";

// If we have a type which is a wrapped type like Promise, how we can get the type which
// is inside the wrapped type?
// For example: if we have `Promise<ExampleType>` how to get ExampleType?
// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

// ======================================================
// Solution
// ======================================================

type PromiseFn<T> = { then: (onfulfilled: (arg: T) => any) => any };

type MyAwaited<T> = T extends Promise<infer K>
  ? K extends Promise<any>
    ? MyAwaited<K>
    : K
  : T extends PromiseFn<infer R>
  ? R
  : never;

// ======================================================
// Test
// ======================================================

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
  Expect<Equal<MyAwaited<string>, never>>
];
