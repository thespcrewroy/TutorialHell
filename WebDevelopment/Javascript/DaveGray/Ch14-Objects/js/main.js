// key-value pairs in curly braces
const myObj = { name: "Dave" };

/* Object within objects. Functions within objects. Accessing object properties */
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
console.log(anotherObj.alive); // true
console.log(anotherObj.hobbies[0]); // Eat
console.log(anotherObj.action()); // Time for Coffee

/* Inheritance */
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2; // adding a new property
console.log(truck); // {doors: 2}
console.log(truck.wheels); // 4
console.log(truck.engine()); // Vrroooom!

const car = Object.create(vehicle);
car.doors = 4; // adding a new property
car.engine = function () {
  return "Whoosh!";
}; // overriding the engine method
console.log(car.engine()); // Whoosh!

const tesla = Object.create(car);
console.log(tesla.wheels); // 4
tesla.engine = function () {
  return "Shhhh...";
}; // overriding the engine method
console.log(tesla.engine()); // Shhhh...

/* Object.keys(), Object.values(), for...in loop */
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};
console.log(Object.keys(band)); // ["vocals", "guitar", "bass", "drums"]
console.log(Object.values(band)); // ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}`);
}

/* Deconstructing objects */
const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

/* Creating a function */
function sings({ vocals }) {
  return `${vocals} sings`;
}
console.log(sings(band));
