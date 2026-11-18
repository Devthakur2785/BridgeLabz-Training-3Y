// Q6. E-Commerce Inventory System
// Run with: node q6.js

const products = [
  { id: 1, name: "Phone", category: "Electronics", price: 20000, stock: 5 },
  { id: 2, name: "T-Shirt", category: "Clothing", price: 600, stock: 50 },
  { id: 3, name: "Laptop", category: "Electronics", price: 55000, stock: 2 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
  { id: 5, name: "Novel", category: "Books", price: 350, stock: 3 },
  { id: 6, name: "Notebook", category: "Books", price: 80, stock: 100 },
];

const getLowStockProducts = (list, limit = 10) => list.filter((p) => p.stock < limit);

// [...list] copies the array so the original order is not changed
const sortProductsByPrice = (list, order = "asc") =>
  [...list].sort((a, b) => (order === "asc" ? a.price - b.price : b.price - a.price));

const calculateTotalInventoryValue = (list) =>
  list.reduce((total, p) => total + p.price * p.stock, 0);

const groupByCategory = (list) =>
  list.reduce((groups, p) => {
    (groups[p.category] ||= []).push(p);
    return groups;
  }, {});

console.log("Low stock (<10):", getLowStockProducts(products).map((p) => `${p.name}(${p.stock})`));
console.log("Sorted by price:", sortProductsByPrice(products).map((p) => `${p.name}: ₹${p.price}`));
console.log("Total inventory value: ₹" + calculateTotalInventoryValue(products));
const grouped = groupByCategory(products);
Object.keys(grouped).forEach((cat) =>
  console.log(`${cat}:`, grouped[cat].map((p) => p.name))
);
