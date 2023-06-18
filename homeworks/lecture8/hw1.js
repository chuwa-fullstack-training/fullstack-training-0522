/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const router = express.router();
const port = 3000;
router.get('/hw1/:dir/:ext', (req, res) => {
  const dir = req.params.dir;
  const extension = req.params.ext;

  fs.readdir(dirName, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      const fileFilter = files.filter(
        (file) => path.extname(file) === '.${extension}'
      );
      res.send(filteredFiles.join('\n'));
    }
  });
});

router.get('/hw2/api/parsetime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  let result = {
    hour: date.getUTCHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.json(result);
});

router.get('/hw2/api/unixtime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  let result = {
    unixtime: date.getTime(),
  };
  res.json(result);
});

router.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
