// Q2: Multi-Type Data Summary

// Declare variables of different data types
let userName = "Harshita";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let student = { name: "Harshita", age: 20 };
let address = null;
let phoneNumber;

// Create a formatted report
let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Phone", Value: phoneNumber, Type: typeof phoneNumber }
];

// Display all data in one table
console.table(report);