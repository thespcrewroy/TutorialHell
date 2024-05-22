// condition ? ifTrue : ifFalse;

/* One access variable */
let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);

/* Two access variables */
soup = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
  ? `Yes, we have ${soup} today.`
  : "Sorry, no soup today.";
console.log(response);

/* Grade Example */
let testScore = 79;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My grade is ${myGrade}.`);

/* Rock Paper Scissors */
let playerOne = "rock";
let computer = "rock";
let result =
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "Player wins!";
console.log(result);