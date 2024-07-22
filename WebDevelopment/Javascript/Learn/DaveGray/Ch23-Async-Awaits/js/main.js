// const myPromise = new Promise((resolve, reject) => {
//   const error = false; // Change to true to see the error
//   if (!error) {
//     // If no error
//     resolve("Yes! resolved the promise!"); // Success
//   } else {
//     // If error
//     reject("No! rejected the promise!"); // Error
//   }
// });

// // console.log(myPromise); // Output: Promise {<fulfilled>: "Yes! resolved the promise!"}

// /* Waits for 3 seconds */
// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved!"); // Success
//   }, 3000); // 3 seconds
// });

// /* Waits for 3 seconds while the other code runs */
// myNextPromise.then((value) => {
//   console.log(value); // Output: myNextPromise resolved!
// });

// /* Chaining promises */
// myPromise
//   .then((value) => {
//     return value + "!"; // Add 1 to the value
//   })
//   .then((newValue) => {
//     console.log(newValue); // Output: Yes! resolved the promise!1
//   })
//   .catch((err) => {
//     console.log(err); // Output: Uncaught (in promise) No! rejected the promise
//   });

// /* Fetch API */
// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// /* Async/Await */
// const myUsers = {
//   userList: [],
// };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Fetch the data
//   const jsonUserdata = await response.json(); // Convert the response to JSON
//   return jsonUserdata; // Return the data
// };

// const anotherFunc = async () => {
//   const data = await myCoolFunction(); // Wait for the data
//   console.log(data);
// };

// anotherFunc(); // Call the function

/* Get Dad Jokes API */
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }); // Fetch the data
  const jsonJokeData = await response.json(); // Convert the response to JSON
  console.log(jsonJokeData);
};

getDadJoke(); // Call the function

/* Post Dad Jokes API */
const jokeObject = {
  id: "GlbxXg3TClb",
  joke: "A woman is on trial for beating her husband to death with his guitar collection. Judge says, ‘First offender?’ She says, ‘No, first a Gibson! Then a Fender!’",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  }); // Fetch the data
  const jsonResponse = await response.json(); // Convert the response to JSON

  console.log(jsonResponse.headers);
};

postData(jokeObject); // Call the function

// /* The Full Query Request Process */
// const getDataFromForm = () => {
//   const requestObj = {
//     firstName: "Bruce",
//     lastName: "Lee",
//     categories: ["nerdy"],
//   };
//   return requestObj;
// };

// const buildRequestUrl = (requestData) => {
//   const proxyUrl = "https://corsproxy.io/?";
//   const targetUrl = `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
//   return proxyUrl + encodeURIComponent(targetUrl);
// };

// const requestJoke = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const jsonResponse = await response.json();
//     const joke = jsonResponse.value.joke;
//     postJokeToPage(joke);
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// };

// const postJokeToPage = (joke) => {
//   console.log(joke);
// };

// // Procedural "workflow" function
// const processJokeRequest = async () => {
//   const requestData = getDataFromForm(); // Get the data from the form
//   const requestUrl = buildRequestUrl(requestData); // Build the URL
//   await requestJoke(requestUrl); // Request the joke
//   console.log("finished!"); // Call the function
// };

// processJokeRequest(); // Call the function
