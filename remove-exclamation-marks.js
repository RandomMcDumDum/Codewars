//<8 kyu> Remove Exclamation Marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solution
const removeExclamationMarks = s => s.replaceAll('!', '')

// Tests
console.log(removeExclamationMarks("Hello World!!")) // Expected output: "Hello World"