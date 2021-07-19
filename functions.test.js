  //  const { TestWatcher } = require("jest");

// BRING IN functions.js FILE
const functions = require("./functions");

// PASS IN A DESCRIPTION AND TTHE NEXT PARAMETER IS OUR FUNCTION
// TO BE
test("adds 2 + 2 to equal 4", () => {
  // THIS FUNCTION WITH THESE PARAMETERS IS toBe(4) toBe = MATCHER
  // toBe LOOKS FOR A SPECIFIC PRIMITIVE VALUE
  expect(functions.add(2, 2)).toBe(4);
});
// NOT TO BE
test("adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


// TO BE NULL
test("shoud be null", () => {
  expect(functions.isNull()).toBeNull();
});
// TO BE FALSY
test("shoud be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
// TO EQUAL (FOR REFERENCE TYPES: array, object)
test("user should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({ firstName: "Brad", lastName: "Traversy"});
});
// LESS THAN(OR EQUAL)/ GREATER THAN(OR EQUAL)
test("should be less than 1600", () => {
  const load1 = 800;
  const load2 = 800;
  // expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
// REGEX
test("there's no i in team", () => {
  expect("team").not.toMatch(/I/i);
});
// TO CONTAIN (ARRAYS)
test("admin should be in usrnames", () => {
  const userNames = ["john", "karen", "admin"]
  expect(userNames).toContain("admin");
});

// ASYNC DATA 

// PROMISE
// test("user fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual("Leanne Graham");
//     })
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});