const removeFromArray = function (arr, ...otherArguments) {
  let result = arr.filter((item) => !otherArguments.includes(item));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
