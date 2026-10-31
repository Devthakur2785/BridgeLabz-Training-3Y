// Q2: Higher-order function with a callback

// Applies the callback to every element and returns a new array
function applyOperation(numbers, operation) {
  const result = [];
  for (const num of numbers) {
    result.push(operation(num));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

// Callback 1: double a number
const double = (n) => n * 2;
// Callback 2: square a number
const square = (n) => n * n;

console.log("Doubled:", applyOperation(numbers, double)); // [2, 4, 6, 8]
console.log("Squared:", applyOperation(numbers, square)); // [1, 4, 9, 16]
