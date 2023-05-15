// <8 kyu> Quarter of the Year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12

// MY SOLUTION
const quarterOf = month => Math.ceil(month / 3 )

// TESTS
console.log(quarterOf(3)) // Expected Output: 1
console.log(quarterOf(8)) // Expected Output: 3
console.log(quarterOf(11)) // Expected Output: 4