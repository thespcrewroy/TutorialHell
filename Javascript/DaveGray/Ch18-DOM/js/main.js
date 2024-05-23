/* Id Selector */
const view1 = document.getElementById("view1");
console.log(view1); // returns the first element with the id of view1

/* Query Selector - More Popular */
const view2 = document.querySelector("#view2"); // use # to indicate it is an id
console.log(view2); // returns the first element with the id of view2

/* Set Style */
view1.style.display = "flex"; // hides the element with the id of view1
view2.style.display = "none"; // shows the element with the id of view2

/* Id Selector All */
const views = document.getElementsByClassName("view"); 
console.log(views); // returns an HTMLCollection of elements with the class of view

/* Query Selector All */
const sameViews = document.querySelectorAll(".view");
console.log(sameViews); // returns a NodeList of elements with the class of view

/* Selecting Divs */
const divs = view1.querySelectorAll("div"); 
console.log(divs); // returns a NodeList of div elements within the element with the id of view1
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs); // returns an HTMLCollection of div elements within the element with the id of view1
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs); // returns a NodeList of even div elements within the element with the id of view1

/* DOM Manipulation */
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
}

const navText = document.querySelector("nav h1");
console.log(navText); // returns the first h1 element within the nav element
navText.textContent = "Hello World!"; // changes the text content of the h1 element

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!<h1> <p>This should align right</p>`; // changes the inner HTML of the nav element
console.log(navbar); // returns the nav element with the new inner HTML
navbar.style.justifyContent = "space-between"; // aligns the content to the right

/* Selecting Elements */
console.log(evenDivs[0]); // returns the first even div element
console.log(evenDivs[0].parentElement); // returns the parent element of the first even div element
console.log(evenDivs[0].parentElement.children); // returns an HTMLCollection of the children of the parent element of the first even div element
console.log(evenDivs[0].parentElement.childNodes) // returns a NodeList of the child nodes of the parent element of the first even div element
console.log(evenDivs[0].parentElement.hasChildNodes()); // returns true if the parent element of the first even div element has child nodes
console.log(evenDivs[0].parentElement.lastChild); // returns the last child node of the parent element of the first even div element
console.log(evenDivs[0].parentElement.lastElementChild); // returns the last child element of the parent element of the first even div element
console.log(evenDivs[0].parentElement.firstChild); // returns the first child node of the parent element of the first even div element
console.log(evenDivs[0].parentElement.firstElementChild); // returns the first child element of the parent element of the first even div element
console.log(evenDivs[0].nextSibling); // returns the next sibling node of the first even div element
console.log(evenDivs[0].nextElementSibling.nextElementSibling); // returns the second sibling element of the first even div element
console.log(evenDivs[0].previousSibling); // returns the previous sibling node of the first even div element
console.log(evenDivs[0].previousElementSibling); // returns the previous sibling element of the first even div element

/* Manipulating DOM Elements */
view1.style.display = "none"; // hides the element with the id of view1
view2.style.display = "flex"; // shows the element with the id of view2
view2.style.flexDirection = "row"; // changes the flex direction of the element with the id of view2
view2.style.flexWrap = "wrap"; // changes the flex wrap of the element with the id of view2
view2.style.margin = "10px"; // changes the margin of the element with the id of view2

while (view2.lastChild) {
    view2.lastChild.remove(); // removes the last child node of the element with the id of view2
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin  = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}
// createDivs(view2, 10); // create a div element with the text content of 10 and append it to the element with the id of view2
for (let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}
