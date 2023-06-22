const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    // res.status(200).json(todos);
    res.render("index", { todo : todos });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createTodo = async (req, res) => {
  try {
    Todo.findOne().sort({ index: -1 })
    .then((lastTodo) => {
      if (!lastTodo) {
        console.log('No data appears');
      } else {
        let newTodo = new Todo({id: Number(lastTodo + 1), todo: req.body?.todo, done: false});
        newTodo
          .save()
          .then(() => {
            console.log("todo is saved");
          })
          .catch((err) => {
            console.log("Error saving todo", err);
          });
          }
    })
    .catch((err) => {
      console.error(err);
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};  

module.exports = {
  getAllTodos,
  createTodo
};