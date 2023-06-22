const express = require('express');
const mongoose = require('mongoose'); // connect to MongoDB

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug'); // Use template engines to render the views:
app.set('views', './views');

mongoose.connect('mongodb://localhost/todo_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({ // Design your own models and schemas.
  todo: String,
  done: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema); // Use MongoDB to store the data.

app.get('/', async (req, res) => { // Design and implement a RESTful API for a todo list app using Express
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({
      todo,
      done: false,
    });
    await newTodo.save();
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send('Todo not found');
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
