const removeFromArray = function(arr, value, ...inputs) {
  let filteredArray = arr.filter((el) => el !== value);
  for (const input of inputs) {
    filteredArray = filteredArray.filter((el) => el !== input);
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
