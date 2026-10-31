// Q5: Callback hell vs async/await
// Pipeline: design -> build -> test -> deploy -> celebrate (1 second each)

// ---------- Version 1: nested callbacks (callback hell) ----------
function stepWithCallback(stepName, callback) {
  setTimeout(() => {
    console.log(`[callback] ${stepName} done`);
    callback();
  }, 1000);
}

function runWithCallbacks(onFinish) {
  stepWithCallback("Design", () => {
    stepWithCallback("Build", () => {
      stepWithCallback("Test", () => {
        stepWithCallback("Deploy", () => {
          stepWithCallback("Celebrate", () => {   // the "pyramid of doom"
            onFinish();
          });
        });
      });
    });
  });
}

// ---------- Version 2: async/await ----------
function step(stepName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[async/await] ${stepName} done`);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  try {
    await step("Design");
    await step("Build");
    await step("Test");
    await step("Deploy");
    await step("Celebrate");
    console.log("[async/await] Pipeline finished");
  } catch (error) {
    console.error("Pipeline error:", error.message);
  }
}

/*
  Why async/await is more readable:
  - Code is flat and reads top-to-bottom like synchronous code, instead of
    drifting right with every nested callback.
  - One try/catch handles errors for all steps (callbacks need error checks
    at every level).
  - Adding, removing or reordering a step is a single line change.
*/

// Run the callback version first, then the async/await version
runWithCallbacks(() => {
  console.log("[callback] Pipeline finished\n");
  runWithAsyncAwait();
});
