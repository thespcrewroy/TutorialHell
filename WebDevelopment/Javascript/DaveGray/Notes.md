## Quick Start
- **about:blank:** opens a blank webpage
- **CTRL + SHIFT + I:** Open Chrome devtools
- Change Devtools to dark theme: Settings → Theme → Dark
- **Console Tab:** allows you to enter javascript directly into the console
- **Comments:** use “//” to write a comment in javascript
- Data Types
  - String
  - Numeric
  - Boolean
- **typeOf:** keyword used to determine the type of data type
- **let:** keyword used to define a variable
- When you add a number and string, you get the number concatenated with the string
- **===:** equals operator for javascript
- **!==:** not equals operator for javascript
- **alert([String]):** creates an alert box in javascript\*\*
- **<script>:** element links to a javascript file
- **CTRL + O → index.html:** opens the html file on the blank webpage (about:blank)
- If you change your javascript file in VSCode and then reload on the webpage, the js code executes immediately
- ` `**const**: Use this keyword when declaring javascript constants
- **let:** Use this keyword when declaring javascript variables

## Strings
- **[string].length:** length of string
- **[string].charAt([x]):** get position of string at index x
- **[string].indexOf([str]):** get index where first letter of first occurrence of that string is
- **[string].lastIndexOf([str]):** get index where first letter of last occurrence of that string is
- **[string].slice([x1,x2]):** display the substring starting from index x1 to x2
- **[string].toUpperCase():** display the string in uppercase
- **[string].toLowerCase():** display the string in lowercase
- **[string].includes([str])):** returns true if the string includes string str
- **[string].split([str]):** split the string into an array of substrings with str not included
- **[string].trim():** removes all trailing and leading whitespace characters

## Integers
- **Number.isNaN([str])):** [str] is NaN, however, it returns false because it checks is value NaN (true) && is value a number data type (false) where (true && false) === false
- **Number.isInteger([str]):** determines if the input is an integer
- **Number.parseFloat([str]):** convert string to float. If a number cannot be parsed, NaN
- **Number.parseInt([str]):** convert string to integer. If a number cannot be parsed, NaN
- **[float].toFixed([x]);** Returns a string rounded to [x] decimal places
- **[float].toString():** convert number to string

## Math Library
- **Math.PI:** generate pi
- **Math.trunc(Math.PI):** remove the decimal part of a number
- **Math.floor(Math.PI):** round down to the nearest integer
- **Math.pow([x1], [x2]):** [x1] raised to the power of [x2]
- **Math.min([x1], [x2], [x3]):** the smallest number
- **Math.max([x1], [x2], [x3]):** the largest number
- **Math.random():** random number between 0 and 1. Inclusive of 0, exclusive of 1

## If and Switch Statements
- Use ``if using ${[var]} to print out the variable (ex.`Yes, we have ${soup} today.`)

## Ternary Operators
- condition ? ifTrue : ifFalse;

## User Input
- **alert([str]):** Shows a message box with a message
- **let var = confirm("Ok === True\nCancel === False"):** hows a message box with a message and button where you can choose what happens when OK is clicked
- **let var = prompt([str]):** Shows a prompt box with a message, input field, and OK and Cancel buttons. If no data is entered, null is returned, so check for that

## Functions
- **function funcName([x1], [x2]) { }:** simple javascript function
- **let var = function funcName([x1], [x2]) { }:** assign variable to function
- **var = (x1, x2) => { };:** arrow function syntax
- **funcName(x1,x2):** how to call a function

## Arrays
- **[array].length:** length of the array
- **[array[array.length - 1]]:** last item in the array
- **[array[1]]:** first item in the array
- **[array].push():** add items to the array
- **[array].pop():** remove items from the end of the array
- **[array].unshift:** add items to the beginning of array
- **[array].shift:** remove items from the beginning of array
- **delete [array[x]]:** delete item [x] from the array
- **[array].splice([x],[x]):** delete item [x] from the array and shift other elements to fill it
- **[array].splice([x], 0, [item]):** add an [item] to the array at index [x]
- **[array].splice([x],[x], [item]):** replace item [x] on the array with item [item]
- **[array].slice([x1],[x2]):** extract sub-array from index [x1] inclusive to [x2] exclusive
- **[array].reverse():** reverse the order of the array
- **[array].join():** convert array to string
- **[str].split([str]):** convert string to array
- **[array1].concat([array2]):** concatenate [array2] to [array1]

## Objects
- Key-value pairs → const myObj = {[varName] : [value]};
- Anonymous Function Syntax:
  - action: function() {
    - return ‘Time for {this.beverage.morning}’;
  - }
- Properties: the key-value pairs that make up an object
  - You can access properties
  - They can be public, private, packaged private, or protected
  - You can put properties within properties
  - Can be anonymous functions
- **[objectName].[function]():** Access anonymous functions of the object
- **const [varName] = Object.create([objectName]):** assign an object to a variable
- **[varName].[newKey] = [value]:** assign a new property to the object
- **[varName].[objectKey]:** access an existing property with inheritance
- **Object.keys([objectName]):** access all the keys of the object
- **Object.values([objectName]):** access all the values of the object
- **for (let [iterateVariable] in [objectName]) {}:** loop through the keys in the object
- **iterateVariable:** access the key using the loop
- **objectName[iterateVariable]:** access the value using the loop
- **[objectName].hasOwnProperty(“[objectKey]”):** see if the key is present in the object
- **delete [objectName].[objectKey]:** delete the property from the object
- **const{[objectKey]} = [objectName]:** Pull the key out of the object
- **function [funcName]({[objectKey]}) {return `${[objectKey]} … `}:** make a function out of the pulled out object key
- **console.log([funcName]([objectName])):** utilize the function that uses pulled out key

## Classes
- **Syntactic Sugar:** Does not change anything functionally about javascript
- **class [className] {}:** create a class
- **constructor([varName], [varName]) {}:** create a constructor function for the class
- **[getterName]() {return this.[keyName]}:** getter method for javascript
- **[setterName]() {this.[keyName] = [keyName]}:** setter method for javascript
- **[functionName]() {}:** create a function for the class object

## JSON
- **JSON.stringify([objectName]):** convert object into JSON
- **JSON.parse([jsonName]):** convert JSON to object

## Errors
- **“use strict”:** enable strict mode for the javascript file
- **Type Error:** when you reassign a constant variable
- **Syntax Error:** when code is syntactically incorrect
- **Reference Error:** when a variable without a type is outputted to the console
- **try {} catch{}:** used to handle errors in javascript
- **console.log([errorName]):** catch a string error
- **console.warn([errorName]):** catch a warn error
- **console.table([errorName]):** catch a table error
- **console.error([errorName]):** catch a catch error
- **throw new Error(“[str]”)**: throw an error
- **err.name:** access the type of error
- **err.message:** access the message of the error
- **err.stack:** access the stack trace of the error
- **try {} catch{} finally {}:** used to handle errors but also execute something whether an error is thrown or not

## Document Object Model (DOM)
- **HTML DOM:** DOM specific to HTML pages
- **Nodes:** are everything in the HTML dom (more nodes than HTML elements)

### Selectors
- **document.getElementById([id]):** select an html element object
- **document.querySelector(#[id]):** select an html element object
- **document.getElementsByClassName([id]):** returns an HTMLCollection of elements with the class with the [id]
- **document.getElementsByClassName([class]):** returns a NodeList of elements with the class of [class].
- **[id].querySelectorAll(“div”):** returns a NodeList of div elements within the element with the specific [id]
- **[id].getElementsByTagName(“div”):** returns a HTMLCollection of div elements within the element with the specific [id]
- **[id].querySelectorAll("div:nth-of-type(2n)"):** returns a NodeList of even div elements within the element with the specific [id]

### Inheritance
- **[var].parentElement:** returns the parent element
- **[var].parentElement.children:** returns HTMLCollection of all the children of the parent
- **[var].parentElement.hasChildNodes():** returns true if the parent element has child node
- **[var].parentElement.childNodes:** returns a NodeList of all the children of the parent
- **[var].parentElement.lastChild:** returns the last child node of the parent element
- **[var].parentElement.lastElementChild:** returns the last child element of the parent
- **[var].parentElement.firstChild:** returns the first child node of the parent element
- **[var].parentElement.firstElementChild:** returns the first child element of the parent
- **[var].nextSibling:** returns the next sibling node
- **[var].nextElementSibling:** returns the next sibling element
- **[var].previousSibling:** returns the previous sibling node
- **[var].previousElementSibling:** returns the previous sibling element

### DOM Manipulation
- **[var].style.display = “[css]”:** whether to display an element and how it is displayed
- **[var].style.backgroundColor = “[css]”**: change the background color of an element
- **[var].style.width = “[css]”**: change the width of an element
- **[var].style.height = “[css]”**: change the height of an element
- **[var].style.margin = “[css]”**: change the margin of an element
- **[var].style.justifyContent = “[css]”:** change the alignment of an element
- **[var].style.alignItems= “[css]”:** change the alignment of an element
- **[var].textContent = [str]:** change the text content of an element
- **[var].innerHTML = `[str]`**: change the html elements within an html element

## Event Listeners
- **defer:** use this keyword in the html script tag to load html DOM before javascript
- **addEventListener([name], [functionName], false):** create an event listener
  - **false:** bubble where it works from the innermost element
  - **true:** capture where it works from the outermost element
- **addEventListener(“click”, [functionName], false):** create a click event listener
- **addEventListener(“mouseover”, [functionName], false):** create a mouse in event list
- **addEventListener(“mouseout”, [functionName], false):** create a mouse out event list
- **addEventListener(“readystatechange”, [functionName], false):** create DOM event list
- **addEventListener(“submit”, [functionName], false):** a form accepts a submit event listener by default
- **removeEventListener(“click”, [functionName], false):** remove the non-anonymous function from the previous event listener that had it
- **event.target:** refers to whatever event you targeted (usually clicked on), AND NOT the element you added the event listener to
- **addEventListener(“click”, (event) => {}):** add an anonymous arrow function to listener
- **event.target.textContent:** access the element text and change it
- **event.target.readyState === “complete”:** check to see if DOM has loaded
- **initApp():** a common function that kicks off your application that is responsible for loading other event listeners and interacting with the DOM
- **event.stopPropagation():** do not execute the next event after this event
- **[element].classList.toggle([action]):** change between two states of the element
- **[element].classList.add([action]):** add a state to the element
- **[element].classList.remove([action]):** permanently delete a state from the element
- **[varName] === [str] ? [varName] = [str] : [varName] = [str]:** another way to toggle but for text
- **event.preventDefault():** prevent flashing or reloading the form when submitting info

## Web Storage API
- **window.alert():** send a pop up alert
- **window.location:** access the website URL
- **Inspect → Application → Storage:** check what is stored in your session
- Session storage, local storage, and web storage only store string data, and if it is not string data, then they will attempt to convert it to string data (just like JSON)
- Thus, storing JSON is the ideal way to store items
- **sessionStorage.setItem():** set items to the session storage
- **sessionStorage.getItem():** get items to the session storage
- **localStorage.setItem():** set items to the local storage
- **localStorage.getItem():** get items to the local storage
- **Session Storage:** the storage that is cached for this session
- **Local Storage:** persistent data that stays even when the website is closed and relaunched
- **localStorage.removeItem([storageName]):** remove an item from local storage
- **localStorage.clear():** remove all items from local storage
- **localStorage.length:** find out how many items are in a local storage
- **localStorage.key([index]):** get the item you want from local storage

## Modules
- **type=“module”:** add this to the script tag in the html to use modules. Automatically applies the defer keyword which tells to load the DOM before the javascript. Automatically applies strict mode to javascript.
- **export default [functionName]:** Allows you to export functions from one javascript file for use in another javascript file. Every javascript module can have one default export. You can also export inline by removing the const, adding the ‘export default’ keyword before the ‘function’ keyword, and also removing the arrow.
- **export {[funcName], [funcName], …}:** export other functions in addition to the default. You can also export inline by adding the ‘export’ keyword before the ‘const’ keyword.
- **import [defaultSomething] from “[filepathOfJSFile]”:** import a default function
- **import {[something] as [name], [funcName] as [name]} from “[filepathOfJSFile]”:** import multiple functions and rename it
- **import \* as [name] from “[filepathOfJSFile]”:** import all functions from the file. The [name] is treated as a class. If you are doing this, it is recommended to not export a default function from the [JSFile], else you would have to call ‘default()’ instead of the name of the function itself, which could get confusing when you are importing multiple files and therefore have multiple default functions.
- **Babble:** for older javascript projects where you can transfer/translate modern javascript code into older javascript syntax that will work in older browsers
- **Webpack/Parcel:** often used with babble as a bundler to wee dand bundle all javascript code into one packaged JAR file

## Higher Order Functions
- Takes one or more functions as an argument/parameter
- Returns a function as a result
- **forEach([iterator[):** if you do not need a specific iterator. Better than for loops.
- **filter([iterator]):** only return the iterator that meets the criteria in the body
- **map([iterator]):** perform an operation on the feature and return the result
- **reduce([iterator]):** use an operator parameter to perform an operation

## Async/Await/Promises
- **callback():** call a function that will in turn call another function.
- **Callback Hell:** when there are funcs inside funcs, your code can become hard to follow
- **Promises:** a way to execute functions within functions without callbacks. Delivers async code where it can execute two different blocks of code at once
- **Promise((resolve, reject) => {if ([condition] {resolve()} else {reject()}}):** create a new promise object and built a reject and resolve function
- **Thennable:** a way to get the promise value
- **[promiseName].then(value => {console.log(value)}):** get the value of the promise
- **[promiseName].then(value => {console.log(value)}).catch(err => {console.log(err)}):** if the promise is unsuccessful and throws an error, catch it and output the error message
- **fetch([API]):** method fetches a response using an API uri. Returns a promise.
- **response.json():** convert the response from the fetch method to JSON. returns a promise.
- **const [funcName] = async () => {}:** create a async arrow function
- **Await:** always await promises if other code needs to execute after long running promises are executed. Must be used within an async function.

## Regex
- **regexr.com:** website to practice capturing regex expressions
- **[enl]:** match e, n, and l individually
- **[^enl]:** match everything except e, n, and l individually
- **[a-z]:** select a range of letters from a to z
- **[0-9]:** select a range of numbers from 0 to 9
- **.:** select everything except newline characters
- **\w:** select all word and number characters
- **\W:** select everything except for word and number characters
- **\d:** select all number characters
- **\D:** select all characters except for numbers
- **\s:** select all whitespace characters including tabs and line breaks
- **\S:** select everything except for whitespace
- **[\s\S]:** select everything
- **^I:** select every I at the beginning of a line
- **d$:** select every d at the end of a line
- **\:** escape special characters such as periods
- **(old):** capture a string ‘old’ using regex and possibly extract them
- **(?:old):** select ‘old’ but do not capture it
- **g(?=old):** only select the letter ‘g’ where it is followed by ‘old’
- **g(?!old):** only select the letter ‘g’ where it is not followed by ‘old’
- **/m:** multiline
- **/g:** global flag where it finds all matches
- (Look Up More If You Have the Time)
