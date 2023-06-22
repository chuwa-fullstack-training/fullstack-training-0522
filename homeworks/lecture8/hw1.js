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
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const r1 = express.Router();
const r2 = express.Router();

//hw1
r1.get("/hw1/:dir/:txt", (req, res) => {
  const dir = req.params?.dir;
  const ext = req.params?.ext;
  console.log(dir, ext``);
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).json("Internal Server Error");
      return;
    } else {
      const filteredFiles = files.filter(
        (file) => path.extname(file) === `${ext}`
      );
      res.send(JSON.stringify(filteredFiles));
    }
  });
});

//hw2
r2.get("/api/parsetime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.send(JSON.stringify(result));
});

r2.get("/api/unixtime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime(),
  };
  res.send(JSON.stringify(result));
});

app.use("/hw1", r1);
app.use("/hw2", r2);
app.listen(3000, () => {
  console.log("Server listen on port 3000!");
});
