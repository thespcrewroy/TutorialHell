// Function Decleartion Syntax
function sum(num1, num2) {
    if (num2 == undefined) {
        return num1 * 2;
    }
    return num1 + num2;
}
console.log(sum(5, 10));


/* Function Expression Syntax */
let getUserNameFromEmail = function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));

/* Arrow Function Syntax */
getUserNameFromEmail = (email) => email.slice(0, email.indexOf("@"));
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));

/* Arrow Function Long Syntax */
getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));