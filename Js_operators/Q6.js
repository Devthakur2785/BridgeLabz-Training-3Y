let count = 0;

// Increment counter
function increment() {
    count++;
    console.log("Count: " + count);
}

// Decrement counter
function decrement() {
    count--;
    console.log("Count: " + count);
}

// Nested function to demonstrate scope
function counterDemo() {
    function showCount() {
        console.log("Current Count inside nested function: " + count);
    }

    showCount();
}

// Simulate click events
increment();
increment();
decrement();
counterDemo();
