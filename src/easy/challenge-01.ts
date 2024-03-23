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
type Person = {
  first: string;
  last: string;
  age: number;
};

type PersonName = MyPick<Person, "first" | "last">;

const myName: PersonName = {
  first: "Wes",
  last: "Sankey",
};
