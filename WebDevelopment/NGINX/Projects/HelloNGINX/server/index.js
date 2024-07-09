const express = require("express");

function createServer(port) {
  const app = express();

  app.use((req, res, next) => {
    console.log(
      `Server on port ${port} received ${req.method} request for ${req.url}`
    );
    next();
  });

  app.get("/", (req, res) => {
    res.send(`I am an endpoint on server ${port}`);
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

const ports = [1111, 2222, 3333, 4444];
ports.forEach((port) => createServer(port));
