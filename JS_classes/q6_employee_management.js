// Q6: Employee Management System (run: node q6_employee_management.js)
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }
  getAnnualSalary() {
    return this.salary * 12;
  }
  // Increase monthly salary by the given percentage
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "Engineering", 60000),
  new Employee(2, "Priya", "HR", 45000),
  new Employee(3, "Rahul", "Sales", 40000),
  new Employee(4, "Sneha", "Finance", 52000),
  new Employee(5, "Karan", "Engineering", 70000),
];

employees[0].applyBonus(10); // Amit gets a 10% bonus

employees.forEach((e) =>
  console.log(`${e.name} (${e.department}): annual salary = ₹${e.getAnnualSalary()}`));

// reduce() sums the annual salaries into one total
const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: ₹${totalPayout}`);
