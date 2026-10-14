// Q8: Employee Salary Projection

// Declare current salary and annual increment rate
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;

// Store yearly salary details
let salaryReport = [];

// Calculate salary for five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    // Round the salary to a whole number
    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

// Display salary projection in a table
console.table(salaryReport);