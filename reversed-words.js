// <8 kyu> Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// My Solution
let reverseWords = (str) => str.split(' ').reverse().join(" ")

// Tests
console.log(reverseWords("hello world!"                 )) // Expected Output: "world! hello"
console.log(reverseWords("yoda doesn't speak like this" )) // Expected Output: "this like speak doesn't yoda"
console.log(reverseWords("foobar"                       )) // Expected Output: "foobar"
console.log(reverseWords("kata editor"                  )) // Expected Output: "editor kata"
console.log(reverseWords("row row row your boat"        )) // Expected Output: "boat your row row row"
console.log(reverseWords(""                             )) // Expected Output: ""
