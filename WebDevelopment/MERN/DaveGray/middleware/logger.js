const { format } = require("date-fns"); // Import the format method from the date-fns library
const { v4: uuid } = require("uuid"); // Import the v4 method from the uuid library
const fs = require("fs"); // Import the fs module
const fsPromises = require("fs").promises; // Import the fs promises API
const path = require("path"); // Import the path module

const logEvents = async (message, logFileName) => {
  // Create a function that logs events
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`; // Get the current date and time
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`; // Create the log item

  try {
    // Try to log the event
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      // Check if the logs folder does not exist
      await fsPromises.mkdir(path.join(__dirname, "..", "logs")); // Create the logs folder
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    ); // Append the log item to the log file
  } catch (err) {
    console.log(err); // Log the error to the console
  }
};

/* 
TODO: Only log the request if it
 * does not come from our own url
 * for only specific routes
 * for only specific request methods 
 */
const logger = (req, res, next) => {
  // Create a logger middleware
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log"); // pass in the request method, url, and origin (where the url originated from) to the reqLog.log file
  console.log(`${req.method} ${req.path}`); // log the request method and path
  next(); // move onto the next middleware or the controller where the request is processed
};

module.exports = { logEvents, logger }; // Export both the logEvents and logger functions because we might use them for error handlers
