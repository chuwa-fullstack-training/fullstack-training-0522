/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

//app.js
const express = require('express');
const app = express();

const querystring = require('querystring');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.end('this is the home page');
});

app.get('/about', (req, res, next) => {
  res.end('this is the about page');
});
app.get('/home.html', (req, res) => {
  // Serve the home page with the submitted data
  const queryString = querystring.stringify(req.query);
  res.render('home', { queryString });
});
app.post('/create-post', (req, res) => {
  // Handle form submission
  const { title, content } = req.body;
  const redirectUrl = 'home.html?title=' + title + '&content=' + content;
  res.redirect(redirectUrl);
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
