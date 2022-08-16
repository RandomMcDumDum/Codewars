// <8 kyu> Transportation on vacation

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// My solution
function rentalCarCost(d) {
    let total = d*40

    if(d >= 7){
        return total-50 
    }else if(d >= 3){
        return total-20
    }else {
        return total
    }
}

// More Efficient solution
let rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));


// Should work for under 3 days 
console.log(rentalCarCost(1)) //Expected output: 40
console.log(rentalCarCost(2)) //Expected output: 80

// Should work for under 7 days
console.log(rentalCarCost(3)) //Expected output: 100
console.log(rentalCarCost(4)) //Expected output: 140
console.log(rentalCarCost(5)) //Expected output: 180
console.log(rentalCarCost(6)) //Expected output: 220

// Should work for more than 7 days
console.log(rentalCarCost(7)) //Expected output: 230
console.log(rentalCarCost(8)) //Expected output: 270
console.log(rentalCarCost(9)) //Expected output: 310
console.log(rentalCarCost(10)) //Expected output: 350