// <8 kyu> Jenny's Secret Message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// My Solution
const greet = name => name==="Johnny" ? "Hello, my love!" : `Hello, ${name}!`

// Tests
console.log(greet("Jim")) //Expected Output: "Hello, Jim!"
console.log(greet("Jane")) //Expected Output: "Hello, Jane!"
console.log(greet("Simon")) //Expected Output: "Hello, Simon!"
console.log(greet("Johnny")) //Expected Output: "Hello, my love!"