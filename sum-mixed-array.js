// <8 kyu> Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution
const sumMix = arr => {

    return arr.map((x) => Number(x)).reduce((previous, current) => previous + current, 0)
}


// Tests
console.log(sumMix([9, 3, '7', '3'])) // Expcted output: 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // Expected Output: 42 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) // Expected Output:41




