// import express
const express = require("express");

// create app
const app = express();

// port number
const PORT = 3000;

// allow reading form data (login, signup, etc.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make "public" folder visible to browser
app.use(express.static("public"));

// home route
app.get("/", (req, res) => {
  res.send("Server is running 👍");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
