// Q1. Student Result Processing (reduce + Classes)
// Run with: node q1.js

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) return 0;
    const total = this.marks.reduce((sum, m) => sum + m, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

const students = [
  new Student("Aarav", [90, 85, 92, 88]),
  new Student("Priya", [65, 70, 58, 72]),
  new Student("Rohan", [30, 25, 40, 35]),
];

students.forEach((s) => {
  console.log(`${s.name}: Average = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`);
});
