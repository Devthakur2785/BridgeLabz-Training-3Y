// Q10: Async delivery pipeline

// Creates a step that waits 1-2 seconds, then randomly succeeds (90%) or fails (10%)
function createStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delayMs = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(successMessage);
      } else {
        reject(new Error(`${stepName} failed`));
      }
    }, delayMs);
  });
}

const takeOrder = () => createStep("takeOrder", "Order taken");
const prepare = () => createStep("prepare", "Food prepared");
const pack = () => createStep("pack", "Package ready");
const dispatch = () => createStep("dispatch", "Out for delivery");
const deliver = () => createStep("deliver", "Delivery completed!");

/*
  Async behaviour / event loop notes:
  - `await` pauses ONLY runPipeline, not the whole program. While waiting,
    runPipeline is suspended and the call stack is free for other work.
  - Each step's setTimeout is handed to the timer API. When it fires, its
    callback goes to the macrotask queue and resolves/rejects the promise.
  - That settlement queues a microtask that resumes runPipeline right after
    the await, so steps run strictly one after another.
  - A rejected promise makes `await` throw, jumping straight to catch, so the
    remaining steps never start.
*/
async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1:", await takeOrder());
    console.log("Step 2:", await prepare());
    console.log("Step 3:", await pack());
    console.log("Step 4:", await dispatch());
    console.log(await deliver());
  } catch (error) {
    console.error("Pipeline failed!");
    console.error("Reason:", error.message);
  }
}

runPipeline();
