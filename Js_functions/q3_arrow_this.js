// Q3: Arrow function vs normal function and `this`

// --- Arrow function version ---
const user = {
  name: "Riya",
  showName: () => {
    console.log("Arrow function  ->", this.name);
  }
};
user.showName(); // undefined

/*
  WHY this.name IS undefined:
  Arrow functions do NOT have their own `this`. They capture `this` from the
  surrounding (lexical) scope at the place where they are written.
  The object literal { ... } does NOT create a scope, so the arrow function
  is really defined in the outer scope:
    - In Node.js (a module), `this` there is module.exports, i.e. {} -> no `name`.
    - In a browser, `this` is `window`, which has no user-defined `name`.
  So `this` is NOT the `user` object, and this.name is undefined.
*/

// --- Fix: normal function (method shorthand also works) ---
const userFixed = {
  name: "Riya",
  showName: function () {
    // A normal function gets `this` from HOW it is called.
    // userFixed.showName() -> `this` is userFixed
    console.log("Normal function ->", this.name);
  }
};
userFixed.showName(); // Riya
