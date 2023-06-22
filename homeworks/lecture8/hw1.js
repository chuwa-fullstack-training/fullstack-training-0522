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

const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.get('/hw1/:dir/:ext', (req, res) => {
  let dir = req.params.dir;
  let ext = req.params.ext;
  console.log("dir is: ", dir);
  console.log("ext is: ", ext);
  fs.readdir(dir, function(err, files) {
    if (err) {
      return console.error(err);
    }
    console.log('files: ' + files)
  
    files.forEach(function(file) {
      // if the extension matches
      if (path.extname(file) === ext) {
        console.log(file);
      }
    });
  });
});

app.get('/hw2/api/parsetime', (req, res) => {
  const time = new Date(req.query.iso);
  const result = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
  res.json(result);
});

app.get('/hw2/api/unixtime', (req, res) => {
  const time = new Date(req.query.iso);
  const result = {
    unixtime: time.getTime(),
  };
  res.json(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});