/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const fs = require('fs');
const { URLSearchParams } = require('url');

const app = express();
app.set('view engine', 'ejs');

// GET
app.get('/', (req, res) => {
  const queryData = new URLSearchParams(req.query).toString();
  res.render('home', { queryData });
});

// POST
app.post('/submit', (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const submittedData = new URLSearchParams(body).toString();
    const redirectUrl = `/home?${submittedData}`;

    res.redirect(302, redirectUrl);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});