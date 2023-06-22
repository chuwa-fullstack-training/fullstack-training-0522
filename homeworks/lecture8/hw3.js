/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();

// Set up view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.end('this is the home page');
});

app.get('/about', (req, res) => {
  res.end('this is the about page');
});

app.get('/home.html', (req, res) => {
  let title = req.query.title;
  let content = req.query.content;

  res.render('home', { title: title, content: content });
});

app.post("/create-post", (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  res.redirect(`/home.html?title=${title}&content=${content}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});