// <8 kyu> Simple Multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution
const simpleMultiplication = number => number%2 === 0 ? number*8 : number*9

console.log(simpleMultiplication(2)) // Expected Output: 16
console.log(simpleMultiplication(1)) // Expected Output: 9
console.log(simpleMultiplication(8)) // Expected Output: 64
console.log(simpleMultiplication(4)) // Expected Output: 32
console.log(simpleMultiplication(5)) // Expected Output: 45