import type { Equal, Expect } from "@type-challenges/utils";

// Implement the built-in Pick<T, K> generic without using it.
// Constructs a type by picking the set of properties K from T
// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

// ======================================================
// Solution
// ======================================================
type MyPick<T, Keys extends keyof T> = {
  [K in Keys]: T[K];
};

// ======================================================
// Test
// ======================================================

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
