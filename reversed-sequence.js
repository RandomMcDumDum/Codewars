// <8 kyu> Reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My Solution
const reverseSeq = n => {
  let arrToReturn = []
  if(n>0){
    for(let i=0; i < n; i++){
        arrToReturn.push(n-i)
    }

    return arrToReturn
  }else {
    return [];
  }
  
};

// Solution using Array methods
const reverseSeq2 = n => {
    // Creates an array with a length of ,n' and fills each element with a 0. Then loop through the area using map() and pass the element and index. For each element, return n-i. 
    return Array(n).fill(0).map((e, i) => n-i)
}

// Tests
console.log(reverseSeq2(5)) // Expected Output: [5, 4, 3, 2, 1]