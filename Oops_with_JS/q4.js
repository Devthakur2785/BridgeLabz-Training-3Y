// Q4. Employee Inheritance (Runtime Polymorphism)
// Run with: node q4.js

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    return `${this.name} from ${this.department} is doing assigned tasks.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} from ${this.department} is managing the team and planning projects.`;
  }
}

const staff = [
  new Employee("Neha", "Engineering"),
  new Manager("Vikram", "Engineering"),
  new Employee("Sara", "HR"),
  new Manager("Amit", "Sales"),
];

// Same call work(), different behaviour decided at runtime
staff.forEach((person) => console.log(person.work()));
