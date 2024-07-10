const express = require("express"); // Import express
const app = express(); // Initialize the express app
const path = require("path"); // Import path
const PORT = process.env.PORT || 3500; // Use the port provided by the environment variable or use 3500

app.use("/", express.static(path.join(__dirname, "/public"))); // Serve the static files from the public directory

app.use("/", require("./routes/root")); // Use the root route (will only crash if someone requests it and it is not there)

/* Handle anything that is not found */
app.all("*", (request, response) => {
  // anything that reaches this that is not processed by the routes above
  response.status(404); // Set the status code to 404
  if (request.accepts("html")) {
    // if the request header is an html
    response.sendFile(path.join(__dirname, "views", "404.html")); // route to 404.html file
  } else if (request.accepts("json")) {
    // if the request header is a json
    response.json({ message: "Not found" }); // return a json object with a 404 not found message
  } else {
    // for all other types of requests
    response.type("txt").send("404 Not Found"); // return a 404 not found text message
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Start the server
