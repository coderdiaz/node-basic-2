// Arithmetic operations
const PI = 3.1416;

// Operations
const sum = (x, y) => x + y;
const substraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = x => y => x / y; // Currying functions

/*
const division = function (x) {
  return function (y) {
    return x / y;
  }
} */

// Exports
module.exports = {
  sum,
  substraction,
  multiplication,
  division,
};