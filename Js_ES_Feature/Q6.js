
"use strict";

const userInput = 5;
const limit = Number(userInput);

if (!Number.isInteger(limit) || limit < 1) {
    console.log("Please enter a positive integer.");
} else {
    for (let i = 1; i <= limit; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";

        }

        console.log(row.trim());
    }
}
