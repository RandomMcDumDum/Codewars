// <8 kyu> If you can't sleep, just count sheep!!

// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution
let countSheep = (num) => {
    let stringToReturn = ''

    if(num == 0){
        return ""
    }

    for(let i=1; i<=num; i++){
        stringToReturn += `${i} sheep...`
    }
    return stringToReturn;
}

// More Efficient Solution
// var countSheep = function (num){
//     let str = "";
//     for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//     return str;
//   }

// Tests:
console.log(countSheep(0)) // Expected Output: ""
console.log(countSheep(1)) // Expected Output: "1 sheep..."
console.log(countSheep(2)) // Expected Output: "1 sheep...2 sheep..."
console.log(countSheep(3)) // Expected Output: "1 sheep...2 sheep...3 sheep..."