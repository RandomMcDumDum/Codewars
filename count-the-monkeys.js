// <8 kyu> Count the Monkeys

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
 
// For example(Input --> Output):
 
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

const monkeyCount = n => {
  let arr = []
  for (let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr
}

console.log((monkeyCount(5))); // Expected Output: [1, 2, 3, 4, 5]);
console.log((monkeyCount(3))); // Expected Output: [1, 2, 3]);
console.log((monkeyCount(9))); // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10))); // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20))); // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
