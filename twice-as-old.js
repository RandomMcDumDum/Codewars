// <8 kyu> Twice As Old

// Your function takes two arguments:

//    current father's age (years)
//    current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future


// Notes
// If subtract the current age of the son from the curr age of the father.
// then sutract the difference in their age from the current age to get the answer?
// if the answer is negative, then you know the father was twice as old a few years ago? 


const twiceAsOld = (dadAge, sonAge) => {
  return Math.abs((dadAge - sonAge) - sonAge)
}

console.log(twiceAsOld(36,7)) //Expected Output: 22
console.log(twiceAsOld(55,30)) //Expected Output: 5
console.log(twiceAsOld(42,21)) //Expected Output: 0
console.log(twiceAsOld(22,1)) //Expected Output: 20
console.log(twiceAsOld(29,0)) //Expected Output: 29
