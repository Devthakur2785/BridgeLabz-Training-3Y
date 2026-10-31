// Q5: Prototypal inheritance Person -> Student

function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name);   // reuse Person constructor to set `name` on this object
  this.branch = branch;
}

// Link prototypes: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore the constructor reference

Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};

const student = new Student("Neha", "Computer Science");
student.printName();    // found on Person.prototype (up the chain)
student.printBranch();  // found on Student.prototype

// Demonstrating the prototype chain
console.log(student instanceof Student);                                // true
console.log(student instanceof Person);                                 // true
console.log(Object.getPrototypeOf(student) === Student.prototype);      // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);  // true
// Chain: student -> Student.prototype -> Person.prototype -> Object.prototype -> null
