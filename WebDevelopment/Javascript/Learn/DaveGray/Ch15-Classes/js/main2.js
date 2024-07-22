/* Super class or Parent class */
class PizzaGeneral {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

/* Sub class or Child class */
class SpecialtyPizza extends PizzaGeneral {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice(); // Our The Works medium pizza has 8 slices.


/* Encapsulation */
class PrivatePizza {
    // public field
    crust = "original";

    // private field
    #sauce = "traditional";
    #size;

    constructor(pizzaSize) {
        this.#size = pizzaSize; 
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo(); // Here's your original traditional sauce large pizza.
console.log(myPizza.getCrust()); // original
console.log(myPizza.sauce); // undefined - cannot access private field