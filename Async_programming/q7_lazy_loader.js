// Q7: Promise.allSettled with a random failure

// One module is randomly chosen to fail
const failingModuleIndex = Math.floor(Math.random() * 3);

// Wraps a loader so that, if it is the chosen module, it rejects instead of resolving
function makeLoader(index, name, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index === failingModuleIndex) {
        reject(new Error(`${name} failed to load`));
      } else {
        resolve(`${name} Loaded`);
      }
    }, delayMs);
  });
}

const loadProfile = () => makeLoader(0, "Profile", 2000);
const loadPosts = () => makeLoader(1, "Posts", 1500);
const loadMessages = () => makeLoader(2, "Messages", 1000);

async function loadDashboard() {
  const startTime = Date.now();
  const moduleNames = ["Profile", "Posts", "Messages"];

  // allSettled never rejects: waits for ALL and reports each outcome
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✔ ${moduleNames[index]} succeeded: ${result.value}`);
    } else {
      console.log(`✘ ${moduleNames[index]} failed: ${result.reason.message}`);
    }
  });

  const totalTime = Date.now() - startTime;
  // Modules load in parallel, so total time is about the slowest one (about 2000 ms)
  console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard();
