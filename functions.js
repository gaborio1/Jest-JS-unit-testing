const axios = require("axios");

// COLLECTION OF FUNCTIONS:

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

// STANDALONE FUNCTIONS:

const uppercase = (str) => str.toUpperCase();

const cloneArray = (array) => [...array];

// ===== EXPORT FUNCTIONS =====

// EXPORT ONE
// module.exports = functions;

// EXPORT MULTIPLE
module.exports = { functions, uppercase, cloneArray };
