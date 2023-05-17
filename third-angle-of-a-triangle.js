// <8 kyu> Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle



let otherAngle = (a , b) => 180 - (a+b)

// TESTS

console.log(otherAngle(30, 60)) // Expected output: 90
console.log(otherAngle(60, 60)) // Expected output: 60
console.log(otherAngle(43, 78)) // Expected output: 59
console.log(otherAngle(10, 20)) // Expected output: 150