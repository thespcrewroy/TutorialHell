const express = require("express"); // Import express
const app = express(); // Initialize the express app
const path = require("path"); // Import path
const { logger } = require("./middleware/logger"); // Import the logger middleware
const errorHandler = require("./middleware/errorHandler"); // Import the errorHandler middleware
const cookieParser = require("cookie-parser"); // Import the cookie-parser middleware
const cors = require("cors"); // Import the cors middleware
const corsOptions = require("./config/corsOptions"); // Import the corsOptions object

/* Constants */
const PORT = process.env.PORT || 3500; // Use the port provided by the environment variable or use 3500

/* Logger */
app.use(logger); // Use the logger middleware

/* CORS */
app.use(cors(corsOptions)); // Use the cors middleware with the corsOptions object

/* Configuration */
app.use(express.json()); // Parse JSON bodies

/* Cookie Parser */
app.use(cookieParser()); // Use the cookie-parser middleware

/* Routes */
app.use("/", express.static(path.join(__dirname, "/public"))); // Serve the static files from the public directory
app.use("/", require("./routes/root")); // Use the root route (will only crash if someone requests it and it is not there)

/* Handle anything that is not found */
app.all("*", (request, response) => {
  // anything that reaches this that is not processed by the routes above
  response.status(404); // Set the status code to 404
  if (request.accepts("html")) {
    // if the request header is an html
    response.sendFile(path.join(__dirname, "/views", "404.html")); // route to 404.html file
  } else if (request.accepts("json")) {
    // if the request header is a json
    response.json({ message: "Not found" }); // return a json object with a 404 not found message
  } else {
    // for all other types of requests
    response.type("txt").send("404 Not Found"); // return a 404 not found text message
  }
});

/* Error Handler */
app.use(errorHandler); // Use the errorHandler middleware

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Start the server
