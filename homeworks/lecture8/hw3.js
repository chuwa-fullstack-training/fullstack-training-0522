/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.end("this is the home page");
})

app.get("/about", (req, res, next) => {
    res.end("this is the about page");
})

app.get("/home.html", (req, res, next) => {
    let title = req.query.title ? req.query.title : "";
    let content = req.query.content ? req.query.content : "";
    res.render('index', { title: title, content: content }); 
})

app.post("/create-post", (req, res, next) => {
    // console.log(req.body);
    const { title, content } = req.body;
    const redirectUrl = "home.html?title=" + title + "&content=" + content;
    res.redirect(redirectUrl);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
