import { test, expect } from "@jest/globals";
test("Testing the dummy files", () => {
  expect(5 + 6).toBe(11);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 4;
  expect(data).toEqual({ one: 1, two: 4 });
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("throw", () => {
  expect(() => compileAndroidCode()).toThrow(Error);
});
