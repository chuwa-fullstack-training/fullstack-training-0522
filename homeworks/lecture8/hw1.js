/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require("express");
const app = express();
const router1 = require("./router1");
const router2 = require("./router2");
const port = 3000;

app.use('/hw1',router1);
app.use('/hw2',router2);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));