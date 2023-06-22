const express = require('express');
const todosRouter = require('./routers/todos');
const connectDB = require('./db');
const app = express();
const port = 3000;

connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/api', todosRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
