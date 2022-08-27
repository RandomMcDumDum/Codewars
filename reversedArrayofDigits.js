// <8 kyu> Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My Solution
// let digitize = n => `${n}`.split('').reverse().map(numberStr => parseInt(numberStr))

// More Efficient
let digitize = n => String(n).split('').reverse().map(Number)


// Test
console.log(digitize(35231)) // Expected Out: 13253
console.log(digitize(0)) // Expected Out: 0


