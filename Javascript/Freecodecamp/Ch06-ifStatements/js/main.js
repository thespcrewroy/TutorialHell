/* Soup Example */
// Define instance variables
let customerIsBanned = false; // boolean
let soup = "chicken noodle soup"; // string
let crackers = true; // boolean
let reply; // string

// Conditional Statements
if (customerIsBanned) { // if customerIsBanned
    reply = "No soup for you!"; // "No soup for you!"
} else if (soup && crackers) { // if there is soup and crackers
    reply = `Here's your order of ${soup} & crackers.`; // "Here's your order of ${soup} & crackers."
} else if (soup) { // if there is soup but no crackers
    reply = `Here's your order of ${soup}. Enjoy!`; // "Here's your order of ${soup}. Enjoy!"
} else { // if there is no soup
    reply = "Sorry, we're out of soup today." // "Sorry, we're out of soup today."
} // end if/else statement

console.log(reply);

/* Grade Example */
// Define instance variables
let testScore = 89;
let collegeStudent = true;
let grade = "grade: ";

if (testScore >= 90) {
    grade += "A";
} else if (testScore >= 80) {
    grade += "B";
} else if (testScore >= 70) {
    grade += "C";
} else if (testScore >= 60) {
    grade += "D";
} else {
    // Nested if statement
    if (collegeStudent) {
        grade += "U";
    } else {
        grade += "F";
    }
}

console.log(grade);