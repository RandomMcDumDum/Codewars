// <8 kyu> Keep Hydrated

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// My Solution
let litres = time => Math.floor(time * 0.50)

// Tests
console.log(litres(2)) // Expected: 1
console.log(litres(1.4)) // Expected: 0
console.log(litres(12.3)) // Expected: 6
console.log(litres(0.82)) // Expected: 0
console.log(litres(11.8)) // Expected: 5
console.log(litres(1787)) // Expected: 893
console.log(litres(0)) // Expected: 0