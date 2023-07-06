h
/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */


const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Homework 1 Router
app.get('/hw1/:dir/:ext', (req, res) => {
  const directory = req.params.dir;
  const extension = req.params.ext;

  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${extension}`);
    res.json(filteredFiles);
  });
});

// Homework 2 Router
// for pase time
app.get('/hw2/api/parsetime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);

  const response = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };

  res.json(response);
});



app.get('/hw2/api/time', (req, res) => {
  const iso = req.query.iso;
  const time = new Date(iso).getTime();

  const response = {
    time: time
  };

  res.json(response);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
