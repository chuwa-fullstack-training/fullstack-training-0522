const express = require('express');
const userRouter = require('./routers/todo');
const connectDB = require('./db');
const app = express();
const port = 3000;
const Todo = require('./models/todos');
connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const {
  getAllTodos,
} = require('./controllers/todo');




app.set('view engine', 'pug');
app.set('views', './views');


app.use('/api', userRouter);

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

app.get('/', async (req, res) => {
  
  try {
    const todos = await Todo.find({}, {id:1, _id:0, todo:1,done:1});
    // console.log(todos);
    res.render('index', {todos});
    // res.render('index', {todos});
    // console.log(users);
    // res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
  // res.render('index', {todos});
});

// app.post('/api/todos', (req, res) => {
//   const todo = req.body.todo;
//   todos.push({ id:  Todo.find( {} ).count(), todo, done: false });
//   res.json(todos);
// });

// app.put('/api/todos/:id', async (req, res) => {
//   const id = parseInt(req.params?.id, 10);
//   console.log(id+"test");
//   try {
//     // find the user
//     const user = await Todo.findById();
//     console.log(user);
//     // update the user
//     user.done = !user.done;


//     // save the user
//     await Todo.save();
//     res.json(user);
//   } catch (err) {
    
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
