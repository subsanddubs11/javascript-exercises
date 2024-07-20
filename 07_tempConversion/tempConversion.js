const convertToCelsius = function(fahrTemp) {
  const celsTemp = parseFloat(((fahrTemp - 32) * 5 / 9).toFixed(1));
  return celsTemp;
};

const convertToFahrenheit = function(celsTemp) {
  const fahrTemp = parseFloat((celsTemp * 9 / 5 + 32).toFixed(1));
  return fahrTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
