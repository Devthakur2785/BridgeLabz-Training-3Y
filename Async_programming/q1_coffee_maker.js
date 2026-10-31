// Q1: Async Coffee Maker using Promise chaining

// Helper: random delay between 1000 and 2000 ms
const randomDelay = () => 1000 + Math.random() * 1000;

// Helper: each step logs, waits, then resolves (or randomly fails ~15% of the time)
function runStep(stepName, resultMessage) {
  return new Promise((resolve, reject) => {
    console.log(`Starting: ${stepName}...`);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${stepName} failed!`)); // simulated random failure
      } else {
        console.log(resultMessage);
        resolve(resultMessage);
      }
    }, randomDelay());
  });
}

const boilWater = () => runStep("Boiling water", "Water is boiled");
const brewCoffee = () => runStep("Brewing coffee", "Coffee is brewed");
const pourIntoCup = () => runStep("Pouring into cup", "Coffee poured into cup");

// Promise chain: each .then() starts only after the previous promise resolves
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => console.log("Coffee ready for the team!"))
  // A rejection in ANY step skips remaining .then()s and lands here
  .catch((error) => console.error("Coffee process error:", error.message));
