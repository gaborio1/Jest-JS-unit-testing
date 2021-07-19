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
  expect(functions.createUser()).toEqual({ firstName: "Brad", lastName: "Traversy"});
});

test("should be less than 1600", () => {
  const load1 = 800;
  const load2 = 800;
  // expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("there's no i in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("admin should be in usrnames", () => {
  const userNames = ["john", "karen", "admin"]
  expect(userNames).toContain("admin");
});

test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual("Leanne Graham");
    })
});