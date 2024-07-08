/* DOM Event Listeners */
document.addEventListener("DOMContentLoaded", () => {
  // Example to show view2 and hide view1 and view3
  document.getElementById("view1").style.display = "none"; // hide view1
  document.getElementById("view2").style.display = "none"; // show view2
  document.getElementById("view3").style.display = "flex"; // hide view3
});

/* Click Event Listener */
// const view = document.querySelector("#view2"); // select the view2 element
// const div = view.querySelector("div"); // select the div element
// const h2 = div.querySelector("h2"); // select the h2 element

// const doSomething = () => {
//   alert("You clicked the h2 element");
// };

// h2.addEventListener("click", doSomething); // add the event listener
// h2.removeEventListener("click", doSomething); // remove the event listener

// h2.addEventListener("click", (event) => {
//   console.log("You clicked the h2 element"); // log the message
//   event.target.textContent = "Clicked"; // change the text content
// }); // add the event listener

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

/* View2 Event Listeners */
// const initApp = () => {
//   const view = document.querySelector("#view2"); // select the view2 element
//   const div = view.querySelector("div"); // select the div element
//   const h2 = div.querySelector("h2"); // select the h2 element

//   view.addEventListener(
//     "click",
//     (event) => {
//       view.classList.toggle("purple"); // toggle the class
//       view.classList.toggle("darkblue"); // toggle the class
//     },
//     false
//   );

//   div.addEventListener(
//     "click",
//     (event) => {
//       div.classList.toggle("blue"); // toggle the class
//       div.classList.toggle("black"); // toggle the class
//     },
//     false
//   );

//   h2.addEventListener(
//     "click",
//     (event) => {
//       const myText = event.target.textContent; // get the text content
//       myText === "My 2nd View"
//         ? (event.target.textContent = "Clicked")
//         : (event.target.textContent = "My 2nd View"); // change the text content
//     },
//     false
//   );

//   const nav = document.querySelector("nav"); // select the nav element
//   nav.addEventListener("mouseover", (event) => {
//     event.target.classList.add("height100"); // add the class
//   });
//   nav.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("height100"); // remove the class
//   });
// };

/* View3 Event Listeners */
const initApp = () => {
  const view3 = document.querySelector("#view3"); // select the view3 element
  const myForm = view3.querySelector("#myForm"); // select the form element
  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default action
    console.log("Form submitted"); // log the message
  });
};
