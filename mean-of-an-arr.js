// <8 kyu> Get the mean of an array
//
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.
// 
// The array will never be empty.

// My Solution
const getAverage = marks => {
//    return marks.reduce((prev, cur) => {prev + cur}, 0) / marks.length
    return Math.floor(marks.reduce((previous, current) => previous + current, 0) / marks.length)
}


// Tests
console.log(getAverage([2,2,2,2])) // Expeceted Output: 2
console.log(getAverage([1,2,3,4,5,])) // Expected Output: 3
console.log(getAverage([1,1,1,1,1,1,1,2])) // Expected Output: 1
