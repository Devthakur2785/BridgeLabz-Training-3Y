
"use strict";

const apiData = [
    "25", "true", "false", "NaN", "                     ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    if (
        typeof value === "string" &&
        value.trim() !== "" &&
        !Number.isNaN(numberValue)
    ) {
        validNumbers.push(numberValue);
    } else if (
        value === null ||
        value === undefined ||
        Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "")
    ) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numberValue);
    }

    console.log(`Value: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: ${stringValue}`);
    console.log("-------------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
