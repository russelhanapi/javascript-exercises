const convertToCelsius = function (temperature) {
  const result = (5 / 9) * (temperature - 32);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
