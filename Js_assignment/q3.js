// Q3: Monthly Expense Tracker

// Store expenses for five categories
let expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

// Calculate total expenses
let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

// Calculate average and add 10% tax
let average = total / Object.keys(expenses).length;
let tax = total * 0.10;
total += tax;

// Display results rounded to two decimal places
console.log("Total with Tax: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax Amount: ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + total.toFixed(2));