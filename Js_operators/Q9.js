let results = [];

// Check numbers from 1 to 30
for (let number = 1; number <= 30; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(number + " - FizzBuzz");
    } else if (number % 2 === 0) {
        results.push(number + " - Even");
    } else {
        results.push(number + " - Odd");
    }
}

// Display results
console.log(results);
