// <8 kyu> Opposites Attract 

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

let loveFunc = (flower1, flower2) => flower1 % 2 != flower2 % 2

// Tests
console.log(loveFunc(1,4)) // Expected: true
console.log(loveFunc(2,2)) // Expected: false
console.log(loveFunc(0,1)) // Expected: true
console.log(loveFunc(0,0)) // Expected: false

// Some elses attempt (That actually worked!!) What the heck am I looking at X3
//         const
//        lovefunc
//       =( Ͼ , Ͽ )=> 
//           ! !
// ( ( Ͼ & 1) ^ (1 & Ͽ ) )