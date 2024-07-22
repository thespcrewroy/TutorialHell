# First Reaction
## The Rebirth
* **ReactJS was released in 2013**
* **Changes happen in real-time so you don't have to update different files repeatedly**
* **You don't have to change the same element in everyfile as just one element change affects the rest**
* **Examples of real-time changes include the number of likes going up or a new reply appearing**
* ***React:*** **A javascript library used for building websites with reusable components**
* ***JSX:*** **An interesting flavor of javascript that allows you to write HTML within your javascript**

## A Breif History
* **Open-source and maintained be Facebook**
* **Instagram, Netflix, Airbnb, and Codedex use React**

<br>

# Our Workstation
## Hot Reloading
* ***Hot Reloading:*** **A feature in React that allows developers to instantly see changes made to their code in real time**

## File Structure
* 📄 ***index.html:***: **HTML with the root of the React app (i.e., ```<div id="root"></div>```)**
* 📄 ***App.js:*** **React code that is written in JSX**
* 📄 ***index.js:*** **The place where our React app is started from**
* 📜 ***package.json:*** **A list of Node packages that help this app run, including React**
* 📄 ***styles.css:*** **Base styles for the React app.**
* **ReactJS can be installed from a node package manager like npm**

## The Root
* ***```<div id="root"></div>```***: **The index.html file features a single element with an id of "root"**
* * **This element is important because it connects our HTML and React code**
* **The root is where our React app is run**
* **This element is selected in the index.js file by a getElementById selector (const container)**
* **The selector 'container' is then passed into the createRoot() function to render the webpage (const root)**
* ***```root.render(<StrictMode><App /></StrictMode>)```***: **Since App.js is the superpage that stores all the other JSX files that build the other webpages, we display our App.js by rendering it on the root with this code**

<br>

# Writing React
## React Syntx
* ***```import React from "react"```:*** **Used to import ReactJS and use JavaScript Syntax Extension (JSX)**
* **JSX is syntactic sugar because it looks like HTML but is actually JavaScript**
* **We can define JSX in a .jsx file or a .js file**
* ***Transpiled:*** **When your code gets translated from JSX to JS and then gets read by the browser**
* **Transpilation Example: ```let heading = <h1 id="welcome-heading">Welcome!</h1>;``` => ```let heading = React.createElement("h1", { id: "welcome-heading" }, "Welcome!");```**

<br>

# Building Blocks
## What Apps Are Made Of
* ***Functional Components:*** **Functions that return JSX content**
    * **Import react to use JSX components**
    * **Define the component as a JavaScript function that returns something**
    * **Return a piece of code wrapped in a ```<div>``` element**
* **Your returned JSX must be wrapped in a ***single*** element**
* ***```export default```***: **Allows us to use the component in other files**
* **When referencing another component, we write like closing tag with a / slash**
* **```export default``` keywords were used for the <App> component too**

