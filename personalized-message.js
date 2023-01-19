// <8 kyu> Grasshopper - Personalized Message

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 		return
// name equals owner 	'Hello boss'
// otherwise 		'Hello guest'

// My Solution
function greet (name, owner) {
  
  if (name.toLowerCase() === owner.toLowerCase()){
    return 'Hello boss'
  }else {
    return 'Hello guest'
  }
  
}

// Refactored
// let greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

// Tests
console.log(greet('Daniel', 'Daniel')) // Expected Output: 'Hello boss'
console.log(greet('Daniel', 'Greg')) // Expected Output: 'Hello guest'