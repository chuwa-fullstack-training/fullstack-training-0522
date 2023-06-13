/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
const express = require('express');
const app = express();
const port = 3000;

// Refactor hw1
const fs = require('fs');
const path = require('path');

// /hw1/dir/ext
app.get('/hw1/:dir(*)/:ext', (req, res) => {
      const dir = req.params?.dir;
      const extensionFilter = req.params?.ext;

      fs.readdir(dir, (err, files) => {
            if (err) throw new Error(err);
            const allFiles = files.filter(file => path.extname(file) === extensionFilter);
            // allFiles.map(file => res.send(file));
            res.send(JSON.stringify(allFiles));
      });
});

// Refactor hw2
// /hw2/api/parsetime?iso=2023-05-22T12:34:56.789Z
// /hw2/api/unixtime?iso=2023-05-22T12:34:56.789Z
app.get('/hw2/api/parsetime', (req, res) => {
      res.send(JSON.stringify(parseTime(req.query?.iso)));
});

app.get('/hw2/api/unixtime', (req, res) => {
      res.send(JSON.stringify(unixTime(req.query?.iso)));
});

function parseTime(query) {
      let time = query.split('T')[1];
      const [hh, mm, ss] = time.split(':');
      return {
            "hour": +hh,
            "minute": +mm,
            "second": +(ss.split('.')[0])
      }
}

function unixTime(query) {
      const dateObj = new Date(query);
      const unixTime = dateObj.getTime();
      return { "unixtime": unixTime };
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`));