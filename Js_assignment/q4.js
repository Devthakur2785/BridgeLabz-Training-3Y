// Q4: Academic Performance Evaluator

// Marks of five subjects (out of 100)
let marks = [90, 85, 88, 92, 80];

let total = 0;

// Calculate total marks
for (let mark of marks) {
    total += mark;
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let failed = marks.some(mark => mark < 35);

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Decide the result
if (failed) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}