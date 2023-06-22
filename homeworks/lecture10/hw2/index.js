const express = require('express');

const todoRouter = require('./routers/todo');

const connect = require('./connect');
const app = express();
const port = 3000;

connect();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/api', todoRouter);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});