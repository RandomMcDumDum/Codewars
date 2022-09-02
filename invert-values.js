// <8 kyu> Invert Numbers

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// My Solution
const invert = array => array.map(num => -num);

//  Test
console.log(invert([1,2,3,4,5])) // Expected out: [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])) // Expected out: [-1,2,-3,4,-5]
console.log(invert([])) // Expected out: []
console.log(invert([0])) // Expected out: [-0]