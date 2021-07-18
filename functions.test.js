const { TestWatcher } = require("jest");
const functions = require("./functions");

test("adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("shoud be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("shoud be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("user should be Brad Traversy object", () => {
  expect(functions.createUser()).toBe({ firstName: "Brad", lastName: "Traversy"});
});