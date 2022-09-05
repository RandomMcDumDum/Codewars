// <8 kyu> Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// My Solution
const areYouPlayingBanjo = name => name.charAt(0).toUpperCase() === "R" ? `${name} plays banjo` : `${name} does not play banjo`

// Tests
console.log(areYouPlayingBanjo("Adam")) //Expected Output: "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")) //Expected Output: "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")) //Expected Output: "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo")) //Expected Output: "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")) //Expected Output: "rolf plays banjo"