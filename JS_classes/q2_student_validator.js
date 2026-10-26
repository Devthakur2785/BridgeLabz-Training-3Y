// Q2: Student Registration Form Validator (browser: runner.html?q=q2_student_validator)
const rules = {
  name:     { re: /^[A-Za-z ]+$/, msg: "Name must contain only alphabets." },
  email:    { re: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, msg: "Enter a valid email (example@domain.com)." },
  phone:    { re: /^\d{10}$/, msg: "Phone must be exactly 10 digits." },
  password: { re: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, msg: "Password needs 1 uppercase, 1 number and 1 special character." },
};

document.body.innerHTML = `
  <style>
    body{font-family:sans-serif;max-width:380px;margin:30px auto}
    input{display:block;width:100%;padding:8px;margin-top:4px;border:2px solid #ccc;box-sizing:border-box}
    .err{color:red;font-size:13px;min-height:16px;margin-bottom:10px}
    button{padding:8px 16px}
  </style>
  <h2>Student Registration</h2>
  <form id="form" novalidate>
    ${Object.keys(rules).map((f) => `
      <label>${f[0].toUpperCase() + f.slice(1)}
        <input id="${f}" type="${f === "password" ? "password" : "text"}">
      </label>
      <div class="err" id="${f}-err"></div>`).join("")}
    <button type="submit">Register</button>
    <p id="result"></p>
  </form>`;

// Validate one field: red border + message if invalid, green if valid
function validateField(field) {
  const input = document.getElementById(field);
  const error = document.getElementById(field + "-err");
  const ok = rules[field].re.test(input.value.trim());
  input.style.borderColor = ok ? "green" : "red";
  error.textContent = ok ? "" : rules[field].msg;
  return ok;
}

Object.keys(rules).forEach((f) =>
  document.getElementById(f).addEventListener("input", () => validateField(f)));

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const allValid = Object.keys(rules).map(validateField).every(Boolean); // validate all, no short-circuit
  const result = document.getElementById("result");
  result.style.color = allValid ? "green" : "red";
  result.textContent = allValid ? "Registration successful!" : "Please fix the errors above.";
});
