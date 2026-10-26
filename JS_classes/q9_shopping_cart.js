// Q9: Shopping Cart with Coupon (run: node q9_shopping_cart.js)
class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }
  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
  // Coupon must look like SAVE20 or DISC10 (SAVE/DISC + two digits = % off)
  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{2})$/.exec(code.trim().toUpperCase());
    if (!match) {
      this.discountPercent = 0;
      return `Invalid coupon "${code}". Use a format like SAVE20 or DISC10.`;
    }
    this.discountPercent = Number(match[2]);
    return `Coupon applied: ${this.discountPercent}% off.`;
  }
  getFinalTotal() {
    return this.getTotal() * (1 - this.discountPercent / 100);
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 150, 3);

console.log("Total before coupon:", cart.getTotal());
console.log(cart.applyCoupon("hello"));
console.log(cart.applyCoupon("SAVE20"));
console.log("Final total:", cart.getFinalTotal());
