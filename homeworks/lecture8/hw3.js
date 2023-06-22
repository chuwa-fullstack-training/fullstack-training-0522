/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  res.render('home', { submittedData: null });
});

app.post('/home', (req, res) => {
  const submittedData = {
    name: req.body.name,
    age: req.body.age
  };
  res.render('home', { submittedData });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
