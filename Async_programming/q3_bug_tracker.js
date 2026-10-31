// Q3: Callback -> Promise migration

// Original callback-based version (kept for reference)
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
// simulateFailure: set to true to force an API failure; otherwise it is random
function getBugs(simulateFailure = Math.random() < 0.3) {
  return new Promise((resolve, reject) => {
    fetchBugs((bugs) => {
      if (simulateFailure) {
        reject(new Error("API request failed"));
      } else {
        resolve(bugs);
      }
    });
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    console.table(bugs);
  })
  .catch((error) => console.error("Could not load bugs:", error.message));
