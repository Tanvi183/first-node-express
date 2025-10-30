const express = require("express"); // First to import expresss
const app = express(); // create app
const port = process.env.PORT || 3000; // If in environment port are not assign than use this port.

app.get("/", (req, res) => {
  // req is used for catch request from comming req send response after work
  res.send("users server is avaiable");
});

app.listen(port, () => {
  // last set app in port to listen
  console.log(`users server started on Port : ${port}`);
});

// install nodemon to start server
