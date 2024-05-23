const myVariable = "Mathematics"; // create a string variable

/* String methods */
console.log(myVariable.length); // display the length of the string
console.log(myVariable.charAt(4)); // display the character at position 4
console.log(myVariable.indexOf("Mat")); // display the position of the first occurrence of "Mat"
console.log(myVariable.lastIndexOf("a")); // display the position of the last occurrence of "a"
console.log(myVariable.slice(5)) // display the substring starting from position 5
console.log(myVariable.slice(5, 2)) // error: start position is greater than end position
console.log(myVariable.slice(2, 5)) // display the substring starting from position 2 to 5
console.log(myVariable.toUpperCase()); // display the string in uppercase
console.log(myVariable.toLowerCase()); // display the string in lowercase
console.log(myVariable.includes("Math")); // check if the string includes "math", returns true
console.log(myVariable.split("e")); // split the string into an array of substrings with e not included
console.log(myVariable.split("")); // split the string into an array of substrings with each character included
