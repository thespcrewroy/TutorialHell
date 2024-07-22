class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType
        this.size = pizzaSize;
        this.size = "medium";
        this.crust = "original";
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`);
    }
}

let myPizza = new Pizza("pepperoni", "small"); // Creating a new pizza object.
myPizza.bake(); // Baking a medium original pepperoni crust pizza.

myPizza = new Pizza("small"); // Creating a new pizza object.
myPizza.setCrust("thin"); // Setting the crust of the pizza.
myPizza.bake(); // Baking a medium thin small crust pizza.
myPizza.setToppings("sausage"); // Setting the toppings of the pizza.
myPizza.setToppings("olives"); // Setting the toppings of the pizza.
console.log(myPizza.getCrust()); // thin
console.log(myPizza.getToppings()); // [ 'sausage', 'olives' ]