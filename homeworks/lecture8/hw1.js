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

app.get('/files', (req, res) => {
  const directory = req.query.directory || '.';
  const extensionFilter = req.query.extension || '';

  fs.readdir(directory, (err, files) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }

    const filteredFiles = files.filter(file => path.extname(file) === extensionFilter);

    res.send(filteredFiles.join('\n'));
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// hw2
const express = require('express');
const url = require('url');

const app = express();

app.get('/api/parsetime', (req, res) => {
  const { iso } = url.parse(req.url, true).query;
  const date = new Date(iso);

  const response = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
});

app.get('/api/unixtime', (req, res) => {
  const { iso } = url.parse(req.url, true).query;
  const date = new Date(iso);

  const response = {
    unixtime: date.getTime(),
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

