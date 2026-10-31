// Q8: Retry mechanism

// Fails about 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Order submitted");
      } else {
        reject(new Error("Network error"));
      }
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();               // pauses here until the promise settles
      console.log(`Attempt ${attempt}: Success`);
      return "Order processed";          // success: leave the loop and function
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
      // loop continues to the next attempt
    }
  }

  // Reached only if all attempts failed
  throw new Error("Order could not be processed");
}

// Handle the final failure gracefully
async function main() {
  try {
    const result = await processOrder();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

main();
