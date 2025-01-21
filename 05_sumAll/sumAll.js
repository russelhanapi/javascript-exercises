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
