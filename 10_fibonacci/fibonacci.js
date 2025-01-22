const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  let fibonacciArr = [0, 1];

  for (let i = 0; i <= n - 2; i++) {
    fibonacciArr.push(
      fibonacciArr[fibonacciArr.length - 1] +
        fibonacciArr[fibonacciArr.length - 2]
    );
  }
  return fibonacciArr[n];
};

// Do not edit below this line
module.exports = fibonacci;
