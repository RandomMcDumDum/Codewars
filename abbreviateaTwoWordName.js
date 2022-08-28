// <8 kyu> Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My Solution
let abbrevName = name => name.split(" ").map(x => x.charAt(0).toUpperCase()).join(".")

// Tests
console.log(abbrevName("Sam Harris")) //Expected Output: S.P
console.log(abbrevName("Patrick Feenan")) //Expected Output: P.F  
console.log(abbrevName("Evan Cole")) //Expected Output: E.C
console.log(abbrevName("P Favuzzi")) //Expected Output: P.F
console.log(abbrevName("David Mendieta")) //Expected Output: D.M 
