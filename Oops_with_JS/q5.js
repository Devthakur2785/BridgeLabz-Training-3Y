// Q5. Ride-Sharing Application
// Run with: node q5.js

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle; // e.g. { model, number }
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance is not provided");
    }
    if (typeof this.distance !== "number" || this.distance < 0) {
      throw new Error("Distance cannot be negative or invalid");
    }
    const baseFare = 50;
    const perKm = 12;
    return baseFare + this.distance * perKm;
  }
}

const rider = new User("Kabir", 4.7);
const driver = new Driver("Ramesh", 4.9, { model: "Swift Dzire", number: "UP85 AB 1234" });
console.log(`Rider: ${rider.name} (${rider.rating}★), Driver: ${driver.name} (${driver.rating}★) in ${driver.vehicle.model}`);

const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -5),
  new Trip("Mathura", "Delhi"), // no distance
];

trips.forEach((trip) => {
  try {
    console.log(`${trip.fromLocation} -> ${trip.toLocation}: Fare ₹${trip.calculateFare()}`);
  } catch (err) {
    console.log(`${trip.fromLocation} -> ${trip.toLocation}: Error - ${err.message}`);
  }
});
