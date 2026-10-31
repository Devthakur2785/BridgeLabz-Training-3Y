// Q6: Fetch and display products from the Fake Store API
// Works in Node.js 18+ (built-in fetch) and in the browser console.

const PRODUCTS_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  const response = await fetch(PRODUCTS_URL);
  if (!response.ok) {
    // fetch does not reject on HTTP errors like 404/500, so check manually
    throw new Error(`HTTP error ${response.status}`);
  }
  return response.json();
}

// Console output for each product
function logProducts(products) {
  products.forEach((product) => {
    console.log(`Product: ${product.title}`);
    console.log(`Price: $${product.price}`);
    console.log(`Image: ${product.image}\n`);
  });
}

// Bonus: product cards (runs only in a browser where `document` exists)
function renderProductCards(products) {
  const container = document.createElement("div");
  container.style.cssText = "display:flex;flex-wrap:wrap;gap:16px;padding:16px";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.style.cssText = "width:200px;border:1px solid #ccc;padding:12px;border-radius:8px";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.style.cssText = "width:100%;height:150px;object-fit:contain";

    const title = document.createElement("h4");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    card.append(img, title, price);
    container.appendChild(card);
  });

  document.body.appendChild(container);
}

async function main() {
  try {
    const products = await fetchProducts();
    logProducts(products);
    if (typeof document !== "undefined") renderProductCards(products);
  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error("Details:", error.message);
  }
}

main();
