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

const router1 = express.Router();
const router2 = express.Router();
router1.get('/:dir/:ext', (req, res) => {
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

router2.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    hour: date.getUTCHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.json(result);
});

router2.get('/api/unixtime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime(),
  };
  res.json(result);
});

app.use('/hw1', router1);
app.use('/hw2', router2);

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', port);
});
