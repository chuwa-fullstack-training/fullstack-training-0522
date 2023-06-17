const express = require('express');
const app = express();
const port = 3000;
const dbconnect = require('./dbconnection');
const { getAllTodos } = require('./controller/todo');
const todoRouter = require('./routers/todo');

// Open db connection
dbconnect();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/hw2/api', todoRouter);

app.get('/hw2', async (req, res) => {
      const todos = await getAllTodos();
      res.render('index', { todos });
})

app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
});