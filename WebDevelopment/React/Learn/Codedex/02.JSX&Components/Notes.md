# How To JSX
## A New Way To JavaScript
* **JSX is a mashup of HTML and Javascript**
    * **Example: ```let header = <header>Compiler Coffee ☕</header>;```**
* **JSX can also be written as a function that returns a markup**
    * **Example: ```function addHeading() {return (<div><header>Compiler Coffee</header></div>)}```**
* **JSX is only valid if everything is wrapped under a single element**
    * **Incorrect: ```return (<h1>The Tourist </h1> <p>by S.E. Hinton</p>)```**
    * **Correct: ```return(<div><h1>The Tourist </h1> <p>by S.E. Hinton</p></div>)```**

<br>

# Embedded JS
## The "JS" in JSX
* **If we place a JavaScript variable in our JSX and render it, its value is displayed**
* **We can use curly braces to do this**
* **Example: ```<h1>{articleTitle}</h1>``` ***where*** ```const articleTitle = "As We May Think";```**
* **Anything you add inside the curly braces must resolve to a single value**

## Conditional JSX
* **We can use conditional statements to determine exactly what JSX should be displayed**
* **For example, we could use an if/else statement to conditionally display JSX elements depending on whether the user signed in or not**
* **If you want content inside the JSX tags to be conditionally set, use a ternary operator**
* **If you want content inside the JSX tags to be conditionally set and there is no ```else``` condition, we can use ```&&``` or ```||``` operators**

<br>

# Travel Gallery
## Attributes and Names
* **JSX supports attributes for applying cool settings to your content**
* **Any valid HTML and their associated attributes are mostly supported in JSX**
* **One exception is HTML ```class```, which is called ```className``` in JSX because ```class``` is a reserved keyword in JavaScript**
