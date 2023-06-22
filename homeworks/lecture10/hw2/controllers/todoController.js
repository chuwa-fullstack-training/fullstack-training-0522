const Todo = require("../models/todo");

// create a new todo
// note: not yet include the function of check id
const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    // res.redirect("/");
    res.json({ message: `Successfully created Todo ${req.body.todo}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to create new todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.joson({ message: `Successfully deleted Todo` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to delete the todo" });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("index", { todos });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to find all todos" });
  }
};

// const updateTodo = async (req, res) => {
//   try {
//     const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: "Failed to update the todo" });
//   }
// };

// NOT YET FINISHED:
// update todo
// get todo by id

module.exports = {
  createTodo,
  deleteTodo,
  // updateTodo,
  getAllTodos,
};
