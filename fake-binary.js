// <8 kyu> Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My Solution
const fakeBin = (x) => x.split('').map(x => x<5 ? '0' : '1').join('')

// Tests
console.log(fakeBin('45385593107843568')) //Exepected Output: '01011110001100111'
console.log(fakeBin('509321967506747')) //Exepected Output: '101000111101101' 
console.log(fakeBin('366058562030849490134388085')) //Exepected Output: '011011110000101010000011011'