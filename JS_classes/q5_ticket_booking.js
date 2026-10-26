// Q5: Movie Ticket Booking (browser: runner.html?q=q5_ticket_booking)
document.body.innerHTML = `
  <style>
    body{font-family:sans-serif;max-width:380px;margin:30px auto}
    input{display:block;width:100%;padding:8px;margin-top:4px;box-sizing:border-box}
    .err{color:red;font-size:13px;min-height:16px;margin-bottom:8px}
    .ticket{border:2px dashed #333;padding:12px;margin-top:16px}
  </style>
  <h2>Book Movie Tickets</h2>
  <form id="form" novalidate>
    <label>Name<input id="name"></label><div class="err" id="name-err"></div>
    <label>Email<input id="email"></label><div class="err" id="email-err"></div>
    <label>Seats (1-10)<input id="seats"></label><div class="err" id="seats-err"></div>
    <button type="submit">Book</button>
  </form>
  <div id="ticket"></div>`;

const checks = {
  name:  { re: /^[A-Za-z ]+$/, msg: "Name must contain only alphabets." },
  email: { re: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, msg: "Enter a valid email." },
  seats: { re: /^([1-9]|10)$/, msg: "Seats must be a number from 1 to 10." },
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  for (const field in checks) {
    const ok = checks[field].re.test(document.getElementById(field).value.trim());
    document.getElementById(field + "-err").textContent = ok ? "" : checks[field].msg;
    if (!ok) valid = false;
  }
  if (!valid) return;

  // Store booking info in an object and display the ticket
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };
  document.getElementById("ticket").innerHTML = `
    <div class="ticket"><h3>🎟 Ticket Confirmed</h3>
    <p>Name: ${booking.name}</p><p>Email: ${booking.email}</p><p>Seats: ${booking.seats}</p></div>`;
});
