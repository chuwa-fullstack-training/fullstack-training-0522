const express = require("express");
const router = express.Router();
const url = require("url");
const http = require("http");
const getJSON = require("../lecture5/hw5");

getValue = (obj) => {
  return { created_at: obj.created_at, title: obj.title };
};

router.get("*", (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  var { query1, query2 } = parsedUrl.query;
  console.log(query1, query2);

  const parseTwo = new Promise((resolve, reject) => {
    const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
    getJSON(url1).then((res) => {
      const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;
      getJSON(url2).then((res2) => {
        resolve([getValue(res.hits[0]), getValue(res2.hits[1])]);
      });
    });
  });
  parseTwo
    .then((response) => {
      const output = {};
      output[query1] = response[0];
      output[query2] = response[1];
      res.send(output);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
