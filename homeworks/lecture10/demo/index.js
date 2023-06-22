const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', todoSchema);


const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = await Todo.create({ todo });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.done = !todo.done;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
