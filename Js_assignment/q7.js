// Q7: Smart Guessing Game

// Generate a random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess
let userGuess = 25;

// Compare the guess with the secret number
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers
    let difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

// Display the secret number for testing
console.log("Secret Number: " + secretNumber);