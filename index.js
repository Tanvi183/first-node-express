const express = require("express"); // First to import expresss
const cors = require("cors"); // without is not provide data to fontend
const app = express(); // create app
const port = process.env.PORT || 3000; // If in environment port are not assign than use this port.

app.use(cors()); // call cors
app.use(express.json());

app.get("/users", (req, res) => {
  // req is used for catch request from comming req send response after work
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("POST method called:", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

const users = [
  { id: 1, name: "tanvir", email: "ab@gmail.com" },
  { id: 2, name: "Sana ullah", email: "abcd@gmail.com" },
  { id: 3, name: "Hridoy", email: "fgfb@gmail.com" },
];

app.listen(port, () => {
  // last set app in port to listen
  console.log(`users server started on Port : ${port}`);
});

// install nodemon to start server
