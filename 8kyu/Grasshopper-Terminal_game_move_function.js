// In this game, the hero moves from left to right. 
// The player rolls the die and moves the number of spaces indicated by the die two 
// imes.

// Create a function for the terminal game that takes the current position 
// of the hero and the roll (1-6) and return the new position.

let position = 3
let roll = 6

function move(position, roll) {
    return position + roll * 2
}

let newPosition = move(position, roll)

console.log("newPosition = " + newPosition)