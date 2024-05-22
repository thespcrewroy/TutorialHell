const myNumber = 42; // an integer is a whole number
const myFloat = 42.01; // a float is a number with a decimal point which refernces a floating point number
const myString = "42.123abc"; // a string is a sequence of characters

/* Number Logic */
console.log(myNumber === myString); // false: different data types
console.log(Number(myString) === myNumber); // true: convert string to number
console.log(myString + 3); // 423: concatenation
console.log(Number(myString) + 3); // 45: addition
console.log(Number("Swap")); // NaN: not a number
console.log(Number(true)); // 1: true is converted to 1
console.log(Number(false)); // 0: false is converted to 0

// "Swap" is NaN (not a number), however, it returns false because it checks 
// is value NaN (true) && is value a number data type (false) where (true && false) === false
console.log(Number("Swap")); // NaN: not a number
console.log(Number.isNaN("Swap")); // false: "Swap" is NaN

/* Number Methods */
console.log(Number.isInteger(myString)); // false: myString is a string
console.log(Number.parseFloat(myString)); // 42.123: convert string to float. If a number cannot be parsed, it returns NaN
console.log(Number.parseInt(myString)); // 42: convert string to integer. If a number cannot be parsed, it returns NaN
console.log(myFloat.toFixed(2)); // 42.01: round to 2 decimal places. Returns a string
console.log(typeof myFloat.toString()); // string: convert number to string
console.log(Number.parseFloat("4.237abc").toFixed(2)); // 4.24: parse float and round to 2 decimal places. Returns a string
