/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// HW1 Router
app.get('/hw1/:dir/:ext', (req, res) => {
  const dir = req.params.dir;
  const ext = req.params.ext;

  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
      res.send(filteredFiles.join('\n'));
    }
  });
});

// HW2 Router
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

app.get('/hw2/api/unixtime', (req, res) => {
  const iso = req.query.iso;
  const unixTime = new Date(iso).getTime();
  const response = {
    unixtime: unixTime
  };
  res.json(response);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
