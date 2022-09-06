// <8 kyu> Calculate Average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution
const find_average = arr => arr.length === 0 ? 0 : arr.reduce((acc, curr) => acc+=curr, 0) / arr.length

// Tests
console.log(find_average([1,1,1])) // Expected Output: 1
console.log(find_average([1,2,3])) // Expected Output: 2
console.log(find_average([1,2,3,4])) // Expected Output: 2.5
console.log(find_average([])) // Expected Output: 0