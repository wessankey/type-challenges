import type { Equal, Expect } from "@type-challenges/utils";

// For given a tuple, you need create a generic Length, pick the length of the tuple
// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

// ======================================================
// Solution
// ======================================================

type Length<T extends readonly any[]> = T["length"];

// ======================================================
// Test
// ======================================================

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;

const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
