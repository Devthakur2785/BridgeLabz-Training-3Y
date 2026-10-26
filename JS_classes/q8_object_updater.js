// Q8: Dynamic Object Updater (browser: runner.html?q=q8_object_updater)
const user = { name: "John", email: "john@mail.com", age: 21 };

document.body.innerHTML = `
  <style>
    body{font-family:sans-serif;max-width:380px;margin:30px auto}
    input{display:block;width:100%;padding:8px;margin:4px 0 10px;box-sizing:border-box}
  </style>
  <h2>Edit User</h2>
  <form id="form">
    <label>Name<input id="name"></label>
    <label>Email<input id="email" type="email"></label>
    <label>Age<input id="age" type="number"></label>
    <button type="submit">Update</button>
  </form>
  <h3>Current user object</h3>
  <pre id="display"></pre>`;

// Fill inputs from the object and show it below the form
function render() {
  document.getElementById("display").textContent = JSON.stringify(user, null, 2);
}
Object.keys(user).forEach((key) => {
  const input = document.getElementById(key);
  input.value = user[key];
  // Update the object in real time as the user types
  input.addEventListener("input", () => {
    user[key] = key === "age" ? Number(input.value) : input.value;
    render();
  });
});
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  render(); // object is already up to date; this confirms on submit
});
render();
