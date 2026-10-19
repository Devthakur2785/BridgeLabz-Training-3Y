const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Evaluate each department
for (let i = 0; i < departments.length; i++) {
    let name = departments[i][0];
    let score = departments[i][1];
    let performance;

    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    console.log(name + ": " + score + " - " + performance);
}
