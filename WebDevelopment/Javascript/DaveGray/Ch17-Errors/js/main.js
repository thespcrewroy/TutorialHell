"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
// variable = "Swap";
// console.log(variable); // This will throw a reference error in strict mode.

// Object..create(); // This will throw a syntax error in strict mode that we cannnot catch

// const name = "Save";
// name = "Joe"; // This will throw a type error in strict mode that we cannot catch

/* String Error */
const makeStringError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.log(err);
    }
};
makeStringError(); // This will throw a string type error in strict mode that we can catch

/* Warn Error */
const makeWarnError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.warn(err);
    }
};
makeWarnError(); // This will throw a warn type error in strict mode that we can catch

/* Table Error */
const makeTableError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.table(err);
    }
};
makeTableError(); // This will throw a table type error in strict mode that we can catch

/* Catch Error */
const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.error(err.stack);
    }
};
makeError(); // This will throw a type error stack in strict mode that we can catch

/* Throw Error */
const makeError2 = () => {
    try {
        throw new Error("This is a error!");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    } finally {
        // Finally block executes no matter what
        console.log("...finally");
    }
};
makeError2(); // This will throw a type error stack in strict mode that we can catch