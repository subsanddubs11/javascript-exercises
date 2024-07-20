const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...nums) {
	let total = 0;
  let numArray = [];

  for (const num of nums) {
    if(Array.isArray(num)) {
      for (let i = 0; i < num.length; i++) {
        numArray.push(num[i]);
      }
    } else {
      numArray.push(num);
    }
  }
  
  numArray.forEach((el) => {
    if (el == '') {
      el = 0;
    }
    total += el;
  });

  return total;
}

const multiply = function(...nums) {
  let total = 1;
  let numArray = [];

  for (const num of nums) {
    if(Array.isArray(num)) {
      for (let i = 0; i < num.length; i++) {
        numArray.push(num[i]);
      }
    } else {
      numArray.push(num);
    }
  }
  
  numArray.forEach((el) => {
    if (el == '') {
      el = 0;
    }
    total *= el;
  });

  return total;
};

const power = function(num1, num2) {
  let total = 1;
	for (let i = 0; i < num2; i++) {
    total *= num1;
  }
  return total;
};

const factorial = function(num) {

  let total = 1;

  if(num == 0) {
    return 1;
  }

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
