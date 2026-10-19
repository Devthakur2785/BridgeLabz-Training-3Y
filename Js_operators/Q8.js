const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalCartValue = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

// Apply category-wise discounts
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);

    console.log(product.item + " Final Price: " + finalPrice);
    discountedTotal += finalPrice;
}

// Apply extra discount if original cart value exceeds 50000
if (totalCartValue > 50000) {
    discountedTotal = discountedTotal - (discountedTotal * 5 / 100);
}

console.log("Original Cart Total: " + totalCartValue);
console.log("Final Cart Total: " + discountedTotal);
