const express = require('express');
const connectDB = require('./db');
const Todo = require('./schema');

connectDB();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (todo) {
      todo.done = !todo.done;
      await todo.save();
      res.json(todo);
    } else {
      res.status(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
