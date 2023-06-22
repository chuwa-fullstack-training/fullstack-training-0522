const Todo = require("../models/todos");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("index", { todos });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const lastRecord = await Todo.findOne().sort({ id: -1 });
    const lastId = lastRecord ? lastRecord.id : 0;
    console.log("lastId: ", lastId);
    console.log("create todo body: ", req.body);
    const todo = new Todo({
      id: Number(lastId + 1),
      todo: req.body?.todo,
      done: false,
    });
    todo
      .save()
      .then(() => {
        console.log("todo saved");
      })
      .then(async () => {
        const todos = await Todo.find();
        res.json(todos);
      })
      .catch((err) => {
        console.log("Error saving todo", err);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const changeTodoState = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const done = req.body.done;
    Todo.findOne({ id: id })
      .then((todo) => {
        if (!todo) {
          console.log("No todo found with id: ", id);
          return;
        }
        return Todo.findOneAndUpdate(
          { id: id },
          { done: !todo.done },
          { new: true, useFindAndModify: false }
        );
      })
      .then((updatedtodo) => {
        console.log("updated todo: ", updatedtodo);
        res.json(updatedtodo);
        console.log("todo updated");
      })
      .catch((err) => {
        console.log("Error updating employee", err);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  changeTodoState,
};
