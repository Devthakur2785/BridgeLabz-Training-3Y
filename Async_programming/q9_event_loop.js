// Q9: Predict and explain execution order

/*
  PREDICTED OUTPUT (written before running):
    1. Script start
    2. Script end
    3. Promise callback
    4. Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
  ACTUAL OUTPUT (matches the prediction):
    Script start
    Script end
    Promise callback
    Timeout callback

  EXPLANATION:
  - "Script start" and "Script end" are synchronous, so they run immediately
    on the call stack.
  - setTimeout hands its callback to the timer API; once the timer fires, the
    callback is placed in the MACROTASK queue (even with 0 ms).
  - Promise.resolve().then(...) places its callback in the MICROTASK queue.
  - After the call stack empties, the event loop always empties the microtask
    queue before taking the next macrotask. So "Promise callback" prints before
    "Timeout callback".
*/
