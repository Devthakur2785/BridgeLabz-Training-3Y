// Q1: Callback flow

// Callback function: runs AFTER the greeting is printed
function showEndMessage() {
  console.log("Welcome to the course!");
}

// greetUser prints a greeting, then invokes the callback it received
function greetUser(name, callback) {
  console.log("Hello " + name);   // Step 1: greeting
  callback();                     // Step 2: callback executes afterwards
}

// Pass the function itself (no parentheses) so greetUser can call it later
greetUser("Aman", showEndMessage);
// Output:
// Hello Aman
// Welcome to the course!
