import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking } from "./guitars.js";
import User from "./user.js";

const me = new User("email@email.com", "Swapnil"); // Create a new User instance
console.log(me); // Output: User {_id: "
console.log(me.greeting()); // Output: Hi, my name is Swapnil.

console.log(playGuitar()); // Output: Playing guitar!
console.log(shred()); // Output: Shredding some licks!
console.log(fingerpicking()); // Output: Plucking the strings...
