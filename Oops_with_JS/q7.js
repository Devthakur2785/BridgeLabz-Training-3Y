// Q7. Banking Application (Private Fields)
// Run with: node q7.js

class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: ₹${this.#balance}, requested: ₹${amount}`);
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log("Initial balance:", account.getBalance());

account.deposit(500);
console.log("After depositing 500:", account.getBalance());

account.withdraw(300);
console.log("After withdrawing 300:", account.getBalance());

try {
  account.withdraw(5000);
} catch (err) {
  console.log("Withdraw failed ->", err.message);
}

try {
  account.deposit(-100);
} catch (err) {
  console.log("Deposit failed ->", err.message);
}

console.log("account.#balance is not accessible from outside:", account.balance); // undefined
console.log("Final balance:", account.getBalance());
