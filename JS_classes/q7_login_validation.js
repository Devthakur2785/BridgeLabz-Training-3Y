// Q7: Login Form Validation (browser: runner.html?q=q7_login_validation)
document.body.innerHTML = `
  <style>
    body{font-family:sans-serif;max-width:380px;margin:30px auto}
    input{display:block;width:100%;padding:8px;margin-top:4px;box-sizing:border-box}
    ul{color:red;font-size:14px}
  </style>
  <h2>Login</h2>
  <form id="form" novalidate>
    <label>Username<input id="username"></label><br>
    <label>Password<input id="password" type="password"></label><br>
    <button type="submit">Login</button>
  </form>
  <ul id="errors"></ul>
  <p id="success" style="color:green"></p>`;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errors = [];

  if (!/^.{5,}$/.test(username)) errors.push("Username must be at least 5 characters.");
  if (!/^.{8,}$/.test(password)) errors.push("Password must be at least 8 characters.");
  if (!/\d/.test(password)) errors.push("Password must include a number.");
  if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");

  document.getElementById("errors").innerHTML = errors.map((m) => `<li>${m}</li>`).join("");
  document.getElementById("success").textContent = errors.length ? "" : "Login successful!";
});
