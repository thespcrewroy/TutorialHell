// JSON: JscaScript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages
*/

const myObj = {
    name: "Dave",
    hobbies: ["Eat", "Sleep", "Code"],
    hello: function() {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); // Convert object to JSON
console.log(sendJSON);
console.log(typeof sendJSON); // string
console.log(sendJSON.name); // undefined - you can't access object properties in a string

const receiveJSON = JSON.parse(sendJSON); // Convert JSON to object
console.log(receiveJSON); // we loose the function in the object when we convert it to JSON and back
console.log(typeof receiveJSON); // object