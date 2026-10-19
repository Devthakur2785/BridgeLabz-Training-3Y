// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

// Calculate highest, lowest, and average scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Count students who passed
let passed = scores.filter(score => score >= 50).length;

// Display summary
console.log("Student Scores: " + scores);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Average Score: " + average.toFixed(2));
console.log("Students Passed: " + passed);
