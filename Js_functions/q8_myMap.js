// Q8: Custom myMap() on Array.prototype

Array.prototype.myMap = function (callback) {
  const result = [];
  // `this` is the array on which myMap was called
  for (let i = 0; i < this.length; i++) {
    // Same arguments as built-in map: (element, index, array)
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2));            // [2, 4, 6]
console.log(["a", "b"].myMap((ch, i) => ch + i));          // ['a0', 'b1']
console.log([1, 2, 3].map((num) => num * 2));              // built-in, same result
