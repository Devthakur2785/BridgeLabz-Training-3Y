// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only for permanent employees
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Total Salary: " + salary);
}

// Test both cases
calculateSalary(true);
calculateSalary(false);

// Change the global variable
bonus = 7000;

console.log("Updated Global Bonus: " + bonus);
calculateSalary(true);
