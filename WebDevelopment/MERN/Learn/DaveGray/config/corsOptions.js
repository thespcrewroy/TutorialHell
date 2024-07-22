const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  // Lookup the origin and the callback function
  origin: (origin, callback) => {
    // If it is an origin in the allowedOrigins array and those with no origin (Postman, Desktop apps, etc.)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // return a no error and success
    } else {
      callback(new Error("Not allowed by CORS")); // return an error
    }
  },
  credentials: true, // sets the access-control-allow-credentials header and allows cookies to be sent
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = corsOptions; // Export the corsOptions object
