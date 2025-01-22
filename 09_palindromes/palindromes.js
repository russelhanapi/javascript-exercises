const palindromes = function (str) {
  const strArr = str
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split("");
  let cont = [];

  return strArr.every((el, i) => el === strArr[strArr.length - 1 - i], false);
};

// Do not edit below this line
module.exports = palindromes;
