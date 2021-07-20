const reverseString = require('./reversestring');

// TO BE DEFINED (TEST TO SEE IF FUNCTION EXISTS)
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});
 