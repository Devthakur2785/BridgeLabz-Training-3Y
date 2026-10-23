
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new TypeError("Null transaction entry");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("Missing transaction ID or amount");
        }

        if (transaction.amount < 0) {
            throw new RangeError("Negative transaction amount");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);

    } catch (error) {
        invalidTransactions.push({
            index: i + 1,
            errorType: error.name,
            message: error.message
        });

        console.log(`Transaction ${i + 1}: ${error.message}`);
    }
}

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log(`Successful Count: ${validTransactions.length}`);
console.log(`Failed Count: ${invalidTransactions.length}`);
