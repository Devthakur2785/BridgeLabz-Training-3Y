// Q8. Movie Ticket Booking System (Prototype Chain)
// Run with: node q8.js

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Added to MovieTicket.prototype AFTER the classes are defined
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: ₹${this.price}`);
};

const t1 = new OnlineTicket("Inception", "B12", 300, 30);
const t2 = new OnlineTicket("Interstellar", "C05", 350, 40);

t1.printTicket(); // found via prototype chain: OnlineTicket.prototype -> MovieTicket.prototype
t2.printTicket();
console.log("Total for t1: ₹" + t1.getTotalAmount());
console.log("Total for t2: ₹" + t2.getTotalAmount());

console.log("t1 has own printTicket?", t1.hasOwnProperty("printTicket")); // false
console.log("Chain check:", Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype); // true
