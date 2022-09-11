// <8 kyu> Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// Example:
// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My Solution
const bmi = (weight, height) => {
    const index = weight / (height ** 2)

    if(index <= 18.5) {
        return "Underweight"
    }else if(index <= 25) {
        return "Normal"
    }else if(index <= 30) {
        return "Overweight"
    }else if(index > 30) {
        return "Obese"
    }
} 

// Test
console.log(bmi(80, 1.80)) // Expected Output: "Normal"
