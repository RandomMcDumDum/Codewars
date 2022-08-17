// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My Solution(It did not work... )
// let wave = str => {
//     for(let i=0; i < str.length; i++){
//         // str.replace(str.charAt(i-1), str.charAt(i-1).toUpperCase())
//         str.replace(str.charAt(i), str.charAt(i).toUpperCase())
//         console.log(str)
//     }
// }

// Most Practical Solution I could find. 
function wave(str){
    // Create an empty array that will be returned at the end of the function
    let result = [];
    
    // Split the string into an array and loop through the array. 
    str.split("").forEach((char, index) => {
        // first check that there is actually a letter at this index of the array
        if (/[a-z]/.test(char)) {
            // Split the str into 3 parts, the part before the Capital letter, the capital letter, and the part after the capital letter. Concat those 3 parts together and push the new string to the 'result' arr
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
            // Do this to every letter in the array
        }
    });
    // Return the result[]
    return result;
}

// Test
console.log(wave("codewars"))