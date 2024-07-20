const fibonacci = function(num) {
  let fibonacciArr = [1, 1];
  num = Number(num);
  
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return 'OOPS';
  } else {
    for (let i = 1; i < num - 1; i++) {
      fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i - 1]);
    }
  }

  return fibonacciArr[fibonacciArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
