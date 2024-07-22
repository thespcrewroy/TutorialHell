const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Dave",
  hobbies: ["eating", "sleeping", "coding"],
  logName: function () {
    console.log(this.name);
  },
};

/* Session Storage */
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject)); // store data in session storage
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); // get data from session storage
console.log(mySessionData); // logs: {name: "Dave", hobbies: Array(3), logName: ƒ}

/* Local Storage */
localStorage.setItem("myLocalStore", JSON.stringify(myArray)); // store data in local storage
const storeLength = localStorage.length; // get the number of items in local storage
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore")); // get data from local storage
console.log(myLocalData); // logs: ["eat", "sleep", "code"]

console.log(storeLength); // logs: 1
