const { logEvents } = require("./logger");

/*
 * This middleware function is used to handle errors in the application.
 * It logs the error message, method, url, and origin to the errLog.log file.
 * It also logs the error stack to the console.
 * It sets the status code of the response to the status code of the response or 500.
 * It sends the error message to the client.
 */
const errorHandler = (err, req, res, next) => {
  console.log("Error handler invoked"); // log that the error handler was invoked
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, // log the error message, method, url, and origin
    "errLog.log" // log the error to the errLog.log file
  );
  console.log("Error stack: ", err.stack); // log the error stack to the console

  const status = res.statusCode ? res.statusCode : 500; // if there is a status code, use it, otherwise use 500

  res.status(status); // set the status code

  res.json({ message: err.message }); // send the error message to the client
};

module.exports = errorHandler;
