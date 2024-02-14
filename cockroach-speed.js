// <8 kyu> Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// 
// For example:
// 
// 1.08 --> 30
// 
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// My solution
const cockroachSpeed = s => Math.floor(27.7778 * s)

// Tests
console.log(cockroachSpeed(1.08)) // Expected Output: 30
console.log(cockroachSpeed(1.09)) // Epxected Output: 30
console.log(cockroachSpeed(0))    // Expected Output: 0












































































