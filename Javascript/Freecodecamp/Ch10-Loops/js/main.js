/* While loop */
let myNumber = 0;
while (myNumber < 10) {
    console.log(myNumber);
    myNumber++;
}
// Don't create an endless loop. You will run out of memory and crash your browser.
// Try to close the browser tab or window, or use the task manager to kill the process.

/* Do while loop, executes once before checking condition */
myNumber = 10;
do {
    console.log(myNumber);
} while (myNumber < 10);

/* For loop */
for (let i = 0; i < 10; i++) {
     console.log(i);
}
let name = "Swap";
for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}
