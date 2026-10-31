// Q7: Closure

function makeMultiplier(multiplier) {
  // The returned inner function "remembers" `multiplier`
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5));  // 15
console.log(double(5));  // 10

/*
  HOW CLOSURE WORKS:
  - makeMultiplier(3) runs, creating a local variable `multiplier = 3`.
  - It returns the inner function. Normally, local variables vanish once a
    function finishes, but the inner function still REFERENCES `multiplier`.
  - JavaScript therefore keeps that variable alive; the inner function carries
    a link to the scope where it was created. This combination (function +
    its surrounding scope) is a closure.
  - Each call to makeMultiplier creates a separate scope, so `double` keeps 2
    and `triple` keeps 3 independently.
*/
