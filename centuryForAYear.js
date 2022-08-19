// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// My solution
let century = year => Math.ceil(year/100)

// Tests
console.log(century(1705)) // Expcted: 18
console.log(century(1900)) // Expcted: 19
console.log(century(1601)) // Expcted: 17
console.log(century(2000)) // Expcted: 20
console.log(century(89))   // Expcted: 1
