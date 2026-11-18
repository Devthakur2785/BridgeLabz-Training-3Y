// Q3. Product Discount System (Constructor + Prototype)
// Run with: node q3.js

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  return this.price - (this.price * percent) / 100;
};

const p1 = new Product("Laptop", 60000);
const p2 = new Product("Headphones", 2500);
const p3 = new Product("Keyboard", 1200);

console.log(`${p1.name}: ₹${p1.price} -> ₹${p1.applyDiscount(10)} (10% off)`);
console.log(`${p2.name}: ₹${p2.price} -> ₹${p2.applyDiscount(20)} (20% off)`);
console.log(`${p3.name}: ₹${p3.price} -> ₹${p3.applyDiscount(5)} (5% off)`);

// Abstraction: the caller only says "applyDiscount(x)".
// The formula (price - price * percent / 100) is hidden inside the method,
// so we never rewrite it for each product, and if the logic changes
// we edit it in just one place.
