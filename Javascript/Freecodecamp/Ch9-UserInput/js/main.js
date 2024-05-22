/* Shows a message box with a message */
// alert("Hello World!");

/* Shows a message box with a message and an OK button */
/* You can choose what happens when the OK button is clicked using equal signs*/
// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

/* Shows a prompt box with a message, input field, and OK and Cancel buttons */
/* If no data is entered, null is returned, so check for that */
let name = prompt("Please enter your name.");
if (name) {
  console.log(name.trim() ?? "You didn't enter your name.")
} else {
  console.log("You didn't enter your name.")
}