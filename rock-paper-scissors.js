// <8 kyu> Rock Paper Scissors!

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Solution
// const rps = (p1, p2) => {
//     if(p1 == 'rock'){
//         switch (p2) {
//             case 'paper':
//                 return 'Player 2 won!'
//             case 'scissors':
//                 return 'Player 1 won!'
//             default:
//                 return 'Draw!'
//         }
//     }else if(p1 == 'paper'){
//         switch (p2) {
//             case 'scissors':
//                 return 'Player 2 won!'
//             case 'rock':
//                 return 'Player 1 won!'
//             default:
//                 return 'Draw!'
//         }
//     }else if(p1 == 'scissors'){
//         switch (p2) {
//             case 'rock':
//                 return 'Player 2 won!'
//             case 'paper':
//                 return 'Player 1 won!'
//             default:
//                 return 'Draw!'
//         }
//     }
// };

// Notable solution
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!"

    let rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'}

    if(p2 === rules[p1]){
        return 'Player 1 Won!'
    }else {
        return 'Player 2 Won!'
    }
}

// Tests

// Let player 1 win
console.log(rps('rock', 'scissors')) //Expeceted output: Player 1 won! 
console.log(rps('scissors', 'paper')) //Expeceted output: Player 1 won! 
console.log(rps('paper', 'rock')) //Expeceted output: Player 1 won!

// Let Player 2 Win
console.log(rps('scissors', 'rock')) //Expeceted output: Player 1 won! 
console.log(rps('paper', 'scissors')) //Expeceted output: Player 1 won! 
console.log(rps('rock', 'paper')) //Expeceted output: Player 1 won! 

// Let a draw occur
console.log(rps('rock', 'rock')) //Expeceted output: Draw! 
console.log(rps('scissors', 'scissors')) //Expeceted output: Draw!  
console.log(rps('paper', 'paper')) //Expeceted output: Draw!  