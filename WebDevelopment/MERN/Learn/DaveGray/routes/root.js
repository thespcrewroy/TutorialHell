const express = require("express"); // Import express
const router = express.Router(); // Initialize the express router
const path = require("path"); // Import path

router.get("^/$|/index(.html)?", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
}); // Get ../views/index.html if they request either '/'. '/index', or '/index.html'

module.exports = router; // Export the router
