const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const todoRouter = require('./routes/todos');
const dbURI =
  'mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/<database>';

// DB connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
