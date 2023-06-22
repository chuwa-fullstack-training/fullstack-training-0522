/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
// import modules
const express = require("express");
const path = require("path");

// create express app
const app = express();

// we use EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname)); // set the views dir

// route for home page
app.get("/", (req, res) => {
  res.send("this is the home page");
});

// route for about page
app.get("/about", (req, res) => {
  res.send("this is the about page");
});

// route for home.html
app.get("/home.html", (req, res) => {
  res.render("home", { data: req.query });
});

// route for creating post
app.post("/create-post", (req, res) => {
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  // redirect to home page with the data
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const redirectLocation = `/home.html?${parsedBody}`;
    res.redirect(redirectLocation);
  });
});

// error handling
app.use((req, res) => {
  res.status(404).send("this is the 404 page");
});

// starting server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
