# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

Split the string into an array
Iterate through the array and if the character is a number or letter, push it to a new array
Declare a new variable that is the new array reversed
If the variable and the new array are the same, then the string is a palindrome


