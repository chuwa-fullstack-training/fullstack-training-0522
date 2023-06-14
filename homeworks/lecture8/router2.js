const express = require("express");
const router = express.Router();

router.get("/api/parsetime/:time", (req, res) => {
  const parsedUrl = req.params.time.split("=")[1];
  const [hour, minute, second] = parsedUrl
    .split("T")[1]
    .split(".")[0]
    .split(":");
  const time = { hour, minute, second };
  res.writeHead(200, { contentType: "application/json" });
  res.end(JSON.stringify(time));
});

router.get("/api/unixtime/:time", (req, res) => {
  const parsedUrl = req.params.time.split("=")[1];
  const time = { unixtime: new Date(parsedUrl).getTime() };
  res.writeHead(200, { contentType: "application/json" });
  res.end(JSON.stringify(time));
});

module.exports = router;
