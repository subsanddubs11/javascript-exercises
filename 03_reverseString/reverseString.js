const reverseString = function(str) {
  const array = str.split('');
  array.reverse();
  const newString = array.join('');
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
