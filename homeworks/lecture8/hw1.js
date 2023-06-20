/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
// import modules
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// make routers
const router1 = express.Router();
const router2 = express.Router();

// hw1
// format: http://localhost:3000/hw1/<dir>/<txt>
router1.get("/hw1/:dir/:txt", (req, res) => {
  const dir = req.params?.dir;
  const extension = req.params?.ext;

  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).send("Unexpected error happened.");
      console.error(err);
    } else {
      const filteredFiles = files.filter(
        (file) => path.extname(file) === `${extension}`
      );
      res.send(JSON.stringify(allFiles));
    }
  });
});

// hw2 - parse time function
router2.get("/api/parsetime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.send(JSON.stringify(result));
});

// hw2 - unix time function
router2.get("/api/unixtime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime(),
  };
  res.send(JSON.stringify(result));
});

// use routers
app.use(router1);
app.use(router2);

// start server
app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Server running on port 3000");
});
