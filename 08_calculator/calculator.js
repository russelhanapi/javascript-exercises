const add = function (...addends) {
  const result = addends.reduce((sum, addend) => (sum += addend));
  return result;
};

const subtract = function (minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function ([...addends]) {
  const result = addends.reduce((sum, addend) => (sum += addend), 0);
  return result;
};

const multiply = function ([...numbers]) {
  const result = numbers.reduce((product, num) => (product *= num), 1);
  return result;
};

const power = function () {};

const factorial = function () {};

// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
// take a look at the spec file that houses the Jest test cases.

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
