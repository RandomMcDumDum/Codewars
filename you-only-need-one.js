//<8 kyu> You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// My Solution
const check = (a, x) => a.findIndex(e => e == x)  === -1? false : true

// Efficient Solution
const check2 = (a,x) => a.includes(x);


// Tests
console.log(check([66, 101], 66)) // Expected Output: true
console.log(check([101, 45, 75, 105, 99, 107], 107)) // Expected Output: true
console.log(check(['t', 'e', 's', 't'], 'e')) // Expected Output: true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) // Expected Output: false