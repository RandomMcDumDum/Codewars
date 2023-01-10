// <8 kyu> Convert a string to an array

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My Solution
let stringToArray = (str) => str.split(' ')

// Tests
console.log(stringToArray("Robin Singh"))// Expected output: ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite")) //Expected output: ["I", "love", "arrays", "they", "are", "my", "favorite"]);
  