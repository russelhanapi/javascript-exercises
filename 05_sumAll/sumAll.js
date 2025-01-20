const sumAll = function (startRange, endRange) {
  // Gate clause
  if (
    startRange < 0 ||
    endRange < 0 ||
    typeof startRange !== "number" ||
    typeof endRange !== "number" ||
    !Number.isInteger(startRange) ||
    !Number.isInteger(endRange)
  ) {
    return "ERROR";
  }

  // Ensure startRange is smaller than endRange
  if (startRange > endRange) {
    [startRange, endRange] = [endRange, startRange];
  }

  let sum = 0;
  // Calculate the sum of all numbers in the range
  for (let i = startRange; i <= endRange; i++) {
    // Get the sum of all those numbers
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
// ## Hints

// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop
