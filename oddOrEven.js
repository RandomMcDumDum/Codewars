// <7 kyu> Odd or Even? 

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

let oddOrEven = arr =>  arr.reduce((acc, curr) => acc += curr, 0) % 2 === 0 ? 'even' : 'odd' 

// Tests
console.log(oddOrEven([0, 1, 5])) // Even 
console.log(oddOrEven([0, 1, 4])) // Odd
console.log(oddOrEven([0, 1, -4])) // Odd