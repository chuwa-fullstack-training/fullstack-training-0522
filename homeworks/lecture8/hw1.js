/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const port = 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get('/hw1/:dir/:ext', (req, res, next) => {
    let dir = decodeURIComponent(req.params.dir);
    let ext = decodeURIComponent(req.params.ext);
    let fileName = path.join(__dirname, dir);
    fs.readdir(fileName, (err, files) => {
      if (err) {
        return res.status(500).send({ error: err.message });
      } else {
        let matchedFiles = files.filter(file => path.extname(file).includes(ext)).join('<br>');     // in broswer
        // let matchedFiles = files.filter(file => path.extname(file).includes(ext)).join('\n');    // in console
        console.log(matchedFiles);
        res.send(matchedFiles);
      }
    });
})

app.get('/hw2/api/:timeFormat', (req, res, next) => {
    // console.log(req.params);
    // console.log(req.query);
    const time = new Date(req.query.iso);
    let result;
    if (req.params.timeFormat === "parsetime") {
        result = {
          hour: time.getHours(),
          minute: time.getMinutes(),
          second: time.getSeconds(),
        };
      } else if (req.params.timeFormat === "unixtime") {
        result = {
          unixtime: time.getTime()
        };
      }
      res.send(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));








