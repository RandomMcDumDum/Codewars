// <8 kyu> Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution
let grow = arr => arr.reduce((acc, curr) => acc * curr, 1)

// TESTS
console.log((grow([1, 2, 3]))) // Expected Output: 6
console.log((grow([4, 1, 1, 1, 4]))) // Expected Output: 16 
console.log((grow([2, 2, 2, 2, 2, 2]))) // Expected Output: 64 