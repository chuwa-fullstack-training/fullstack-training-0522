const mongoose = require("../db/connect");
const { Todo } = require("../model/todoSchema");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).render("index", { todos: allTodos });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    console.log("create", req.body);
    const sortedTodo = await Todo.find().sort({ id: -1 });
    const maxId = sortedTodo.length!==0 ? sortedTodo[0].id + 1 : 1;
    const todo = new Todo({
      id: maxId,
      name: req.body.todo,
      done: false,
    });
    const createdTodo = await todo.save();
    res.status(200).json(createdTodo);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("update", id, typeof id);
    const todo = await Todo.findOne({ id: id });
    todo
      ? (todo.done = !todo.done)
      : res.status(404).json({ err: "cannot find todo" });
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedTodo = await Todo.findOneAndDelete({ id: id });
    res.status(200).json(deletedTodo);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { getAllTodos, deleteTodo, createTodo, updateTodo };
