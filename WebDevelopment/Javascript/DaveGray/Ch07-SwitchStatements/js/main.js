/* Random Number Example */
switch(Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("No match!")
}

/* Rock Paper Scissor Example */
let playerOne = "rock";
let computer = "scissors";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
}