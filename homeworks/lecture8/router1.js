const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("*", (req, res) => {
  const url = req.params[0];
  console.log(url);
  const directory = url.substring(0, url.lastIndexOf("/"));
  const extension = url.substring(url.lastIndexOf("/") + 1);
  console.log(777, directory, 777, extension);
  fs.readdir(path.dirname(directory), (err, files) => {
    if (err) throw err;
    else {
      let outputFile = { file: [] };
      files.forEach((file) => {
        if (path.extname(file) === `.${extension}`) {
          console.log(file);
          outputFile.file.push(file);
        }
      });
      res.send(outputFile);
    }
  });
});
module.exports = router;
