import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
      
    const handleClick = () => {
        console.log('Button clicked!'); // Button clicked!
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`); // Dave was clicked
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText); // The inner text of the button clicked
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('Dave')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content
