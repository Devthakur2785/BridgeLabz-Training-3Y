// Q2: Microtask vs Macrotask order

console.log("Start");                                   // 1 (sync)

setTimeout(() => console.log("setTimeout (macrotask)"), 0);   // queued in macrotask queue

Promise.resolve().then(() => console.log("Promise.then (microtask)")); // queued in microtask queue

console.log("Synchronous log");                          // 2 (sync)

console.log("End");                                      // 3 (sync)

/*
  Output order:
    Start
    Synchronous log
    End
    Promise.then (microtask)
    setTimeout (macrotask)

  WHY microtasks run before macrotasks:
  1. The call stack runs all synchronous code first (Start, Synchronous log, End).
  2. When the stack is empty, the event loop FIRST drains the ENTIRE microtask
     queue (promise callbacks, queueMicrotask) before doing anything else.
  3. Only then does it take ONE macrotask (setTimeout, I/O, UI events) from the
     macrotask queue, and after each macrotask it drains microtasks again.
  So even with a 0 ms delay, setTimeout waits behind the promise callback.
*/
