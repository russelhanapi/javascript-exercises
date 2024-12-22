const repeatString = function (stringInput, count) {
  if (count < 0) return "ERROR";
  else {
    let finalString = "";
    for (let i = 0; i < count; i++) {
      finalString += stringInput;
    }
    return finalString;
  }
};

// Do not edit below this line
module.exports = repeatString;
