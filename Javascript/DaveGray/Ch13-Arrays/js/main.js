let myArray = [];

// add items to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log("Array: " + myArray); // ["Dave", 1001, false]

// length property
console.log("Array Length: " + myArray.length); // 3

// last item in an array
console.log("Last item: " + myArray[myArray.length - 1]); // false

// first item in an array
console.log("First item: " + myArray[0]); // Dave

// add items to an array
myArray.push("school");
console.log("Add new item at the end: " + myArray); // ["Dave", 1001, false, "school"]

// remove the last item from an array
const lastItem = myArray.pop();
console.log("Remove last item: " + myArray); // ["Dave", 1001, false]
console.log("last item: " + lastItem); // school

// add item to the beginning of an array
const newLength = myArray.unshift(42);
console.log("Add new item at the start: " + myArray); // [42, "Dave", 1001, false]
console.log("New length: " + newLength); // 4

// remove the first item from an array
const firstItem = myArray.shift();
console.log("Remove item from beigining: " + myArray); // ["Dave", 1001, false]
console.log("First item: " + firstItem); // 42

// delete an item from an array
delete myArray[1];
console.log("Delete item 1: " + myArray); // ["Dave", empty, false]
console.log("Item 1: " + myArray[1]); // undefined

// splice method - better than delete
myArray.splice(1, 1);
console.log("Delete item 1: " + myArray); // ["Dave", false]
console.log("New item 1: " + myArray[1]); // false

// inset an item within an array
myArray.splice(1, 0, 42);
console.log("Insert 42 into item 1: " + myArray); // ["Dave", 42, false]

// replace an item within an array
myArray.splice(1, 1, "Dave Jr.");
console.log("Replace 42 with Dave Jr.: " + myArray); // ["Dave", "Dave Jr.", false]

myArray = ["A", "B", "C", "D", "E", "F"];
console.log("New Array: " + myArray); // New Array: A,B,C,D,E,F

// slice method
const newArray = myArray.slice(2, 5);
console.log("Sliced Array: " + newArray); // Sliced Array: C,D,E

// reverse method
myArray.reverse();
console.log("Reversed Array: " + myArray); // Reversed Array: F,E,D,C,B,A

// array to string
const newString = myArray.join();
console.log("Array To String: " + newString); // Joined Array: F,E,D,C,B,A

// string to array
const newArray2 = newString.split(",");
console.log("String To Array: " + newArray2); // Split Array: F,E,D,C,B,A

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

// concat method
const newArray3 = myArrayA.concat(myArrayB);
console.log("Concatenated Array: " + newArray3); // Concatenated Array: A,B,C,D,E,F

// spread operator - take the values in the array and spread them out to the new array
const newArray4 = [...myArrayA, ...myArrayB];
console.log("Spread Operator: " + newArray4); // Spread Operator: A,B,C,D,E,F

// no spread operator
const newArray5 = [myArrayA, myArrayB];
console.log("No Spread Operator: " + newArray5); // No Spread Operator: A,B,C,D,E,F

/* Two Dimensional Array */
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]); // football
console.log(clothesShelfB[0]) // sweat tops

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]); // football
console.log(clothesDept[1][0]); // sweat tops

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]); // football
console.log(sportsStore[1][1][2]); // hoodies