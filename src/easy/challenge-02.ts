import type { Equal, Expect } from "@type-challenges/utils";

// Implement the built-in Readonly<T> generic without using it.
// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

// ======================================================
// Solution
// ======================================================

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// ======================================================
// Test
// ======================================================

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
