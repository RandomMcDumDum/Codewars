// <8 kyu> Count of Positives / Sum of Negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My Solution
let countPositivesSumNegatives = input => input == null ? [] : [
    input.filter(x => x > 0).length, 
    input.filter(x => x < 0).reduce((acc, curr) => acc+=curr, 0)
] 

// Actual Solution
// let countPositivesSumNegatives = input => input && input.length ? [
//     input.filter(x => x > 0).length, 
//     input.filter(x => x < 0).reduce((acc, curr) => acc+=curr, 0)
// ] : []

// Technically I was correct, but my solution never actually return an empty arr, the actual solution would make sure that there was something to actually use before creating the array that will be returned. I think that makes sense...



// Tests
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let testData2 = [0,0]
let testData3 = []

console.log(countPositivesSumNegatives(testData))
console.log(countPositivesSumNegatives(testData2))
console.log(countPositivesSumNegatives(testData3))