// 8 kyu Parse nice int from char problem
// 
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// 
// Write a program that returns the girl's age (0-9) as an integer.
// 
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// My Solution
const getAge = str => Number(str.charAt(0))

// Tests
console.log(getAge("4 years old")) // Expected Output: 4
console.log(getAge("5 years old")) // Expected Output: 5
console.log(getAge("6 years old")) // Expected Output: 6
console.log(getAge("7 years old")) // Expected Output: 7








































