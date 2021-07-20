// HAS TO SPLIT INTO ARRAY SO WE CAN CALL reverse() ON IT
// SO IT PASSES reverses with upprecase TEST

const reverseString = str =>
  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = reverseString;