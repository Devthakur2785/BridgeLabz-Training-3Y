// Q4: Promise.all vs Promise.race

// Creates a server that responds after `delayMs`, with a 15% random failure chance
function deployToServer(serverName, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${serverName} failed to respond`));
      } else {
        resolve(`${serverName} responded after ${delayMs / 1000}s`);
      }
    }, delayMs);
  });
}

// Fresh promises for each combinator so each shows independent behaviour
const serverA = () => deployToServer("Server A", 2000);
const serverB = () => deployToServer("Server B", 3000);

// Promise.all: waits for BOTH (about 3s); rejects immediately if either fails
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((error) => console.error("Promise.all error:", error.message));

// Promise.race: settles as soon as the FIRST promise settles (about 2s, Server A)
Promise.race([serverA(), serverB()])
  .then((winner) => console.log("Fastest response:", winner))
  .catch((error) => console.error("Promise.race error:", error.message));
