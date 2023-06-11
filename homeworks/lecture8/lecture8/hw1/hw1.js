/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<txt>
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */


const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const userRouter = require('./routers/q1');
const postRouter = require('./routers/q2');

app.use('/', userRouter);
app.use('/api', postRouter);

// app.use(express.static('public'));

// app.get('/home/:name', (req, res, next) => {
//   console.log('query', req.query);
//   console.log('params', req.params);
//   res.send(`this is ${req.params.name} page`);
//   //   next();
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
