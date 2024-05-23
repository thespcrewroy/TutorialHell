// var, let, and const are used to declare variables in JavaScript.
var x = 1; // var was used in javascript until 2015, and is not considered legacy code.
var x = 2; // var can be redeclared, which can get confusing as it does not throw an error.
console.log(x); // 2

let y = 1;
y = 2; // let can be reassigned, but not redeclared.
console.log(x); // 2

const z = 1;
// z = 2; // const cannot be reassigned or redeclared. The preferred way to declare variables in modern JavaScript.
console.log(x); // TypeError: Assignment to constant variable.

// global scope
var q = 1;

// local scope
{
    let q = 4;
    console.log(q); // will execute 4
}

// local scope
function myFunc() {
    let q = 5;
    console.log(q); // will execute 5
}

myFunc(); // will execute
console.log(q); // will execute 1