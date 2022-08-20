// <8 kyu> How good are you really? 

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints){
    let classAverage = classPoints.reduce((acc, curr) => acc += curr, yourPoints) / (classPoints.length + 1)

    return yourPoints > classAverage
}

// Tests
console.log(betterThanAverage([2, 3], 5)) // True 
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // True
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // False
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)) //False