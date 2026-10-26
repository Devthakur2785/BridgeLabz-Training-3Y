// Q1: E-Commerce Product Manager (run: node q1_product_manager.js)
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
  // Reduce price by the given percentage (e.g. 10 => 10% off)
  applyDiscount(percent) {
    this.price = +(this.price - (this.price * percent) / 100).toFixed(2);
  }
  // Return a formatted description
  getDetails() {
    return `#${this.id} | ${this.name} | ₹${this.price} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Smartphone", 18000, "Electronics"),
  new Product(4, "Notebook", 120, "Stationery"),
  new Product(5, "Headphones", 1499, "Accessories"),
];

console.log("All products:");
products.forEach((p) => console.log(p.getDetails()));

products[0].applyDiscount(10); // 10% off the laptop
console.log("\nAfter 10% discount on Laptop:", products[0].getDetails());

console.log("\nProducts with price > 1000:");
products.filter((p) => p.price > 1000).forEach((p) => console.log(p.getDetails()));
