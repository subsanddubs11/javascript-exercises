const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  }

  let total = 0;
  let startNum = 0;
  let endNum = 0;

  if (num2 < num1) {
    startNum = num2;
    endNum = num1;
  } else {
    startNum = num1;
    endNum = num2;
  }

  for (let i = startNum; i <= endNum; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
