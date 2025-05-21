import { assertEquals } from "jsr:@std/assert";
import { isStrictlyAscending } from "./01_strictly_ascending.js";
import { isStrictlyDescending } from "./02_strictly_descending.js";
import { extractDigits } from "./03_extract_digits.js";
import { concat } from "./04_concat.js";

Deno.test("Is it In ascending Order.", () => {
  assertEquals(isStrictlyAscending([1, 3, 4, 5, 16]), true);
});

Deno.test("Is it In ascending Order.", () => {
  assertEquals(isStrictlyAscending([1, 3, 2, 4]), false);
});

Deno.test("Is Array In descending Order", () => {
  assertEquals(isStrictlyDescending([5, 4, 2, 1]), true);
});

Deno.test("Is Array In descending Order", () => {
  assertEquals(isStrictlyDescending([5, 4, 2, 9]), false);
});

Deno.test("extractDigits", () => {
  assertEquals(extractDigits(-1), [1]);
});

Deno.test("concatTwoArrays", () => {
  assertEquals(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6]);
});

Deno.test("concatTwoArrays", () => {
  assertEquals(concat([1], [4]), [1, 4]);
});
