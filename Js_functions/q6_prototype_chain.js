// Q6: Person -> Faculty -> Professor

// ----- Person -----
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log("Hi, I am " + this.name);
};

// ----- Faculty (inherits Person) -----
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log("Department: " + this.department);
};

// ----- Professor (inherits Faculty) -----
function Professor(name, department, researchArea) {
  Faculty.call(this, name, department);
  this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showResearch = function () {
  console.log("Research area: " + this.researchArea);
};

const prof = new Professor("Dr. Sharma", "Physics", "Quantum Computing");

prof.showResearch();    // Professor.prototype
prof.showDepartment();  // Faculty.prototype  (one level up)
prof.introduce();       // Person.prototype   (two levels up)

console.log(prof instanceof Professor, prof instanceof Faculty, prof instanceof Person); // true true true
// Chain: prof -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype -> null
