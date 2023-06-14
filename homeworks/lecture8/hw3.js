/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", __dirname);

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/home.html", (req, res) => {
  res.render("home", { content: req.query });
});

app.post("/create-post", (req, res) => {
  const { title, content } = req.body;
  res.redirect(
    `/home.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(
      content
    )}`
  );
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
