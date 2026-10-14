// Q6: Progressive Discount System

// Test purchase amount
let total = 8000;
let discountPercentage = 0;

// Select the discount tier
if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount and final price
let discount = Math.round(total * discountPercentage / 100);
let finalPrice = Math.round(total - discount);

// Display the results
console.log("Original Total: ₹" + total);
console.log("Discount: " + discountPercentage + "%");
console.log("Final Price: ₹" + finalPrice);