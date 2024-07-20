const palindromes = function (str) {
  const forwardArr = str.toLowerCase().split('').filter(isLetterOrNumber);
  const forwardStr = forwardArr.join('');
  const reversedStr = forwardArr.reverse().join('');

  if (forwardStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const isLetterOrNumber = (char) => {
  const regex = /[a-z\d]/;
  return regex.test(char);
}

// Do not edit below this line
module.exports = palindromes;
