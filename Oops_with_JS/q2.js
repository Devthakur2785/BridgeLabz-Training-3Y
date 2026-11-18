// Q2. Online Food Ordering (map + reduce + Error Handling)
// Run with: node q2.js

const menu = [
  { item: "Burger", price: 120 },
  { item: "Pizza", price: 250 },
  { item: "Pasta", price: 180 },
  { item: "Coke", price: 50 },
];

function calculateBill(orderItems) {
  // map(): convert each ordered item name into its price
  const priceList = orderItems.map((name) => {
    const found = menu.find((m) => m.item.toLowerCase() === name.toLowerCase());
    if (!found) throw new Error(`Invalid item ordered: "${name}" is not on the menu`);
    return found.price;
  });

  // reduce(): sum up the prices
  return priceList.reduce((total, price) => total + price, 0);
}

try {
  console.log("Order 1 total: ₹" + calculateBill(["Burger", "Coke", "Pizza"]));
  console.log("Order 2 total: ₹" + calculateBill(["Pasta", "Sushi"])); // invalid
} catch (err) {
  console.log("Order failed ->", err.message);
}
