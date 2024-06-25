import type { Equal, Expect } from "@type-challenges/utils";

// Implement the built-in Exclude<T, U>
// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

// ======================================================
// Solution
// ======================================================

type MyExclude<T, U> = T extends U ? never : T;

// ======================================================
// Test
// ======================================================

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
