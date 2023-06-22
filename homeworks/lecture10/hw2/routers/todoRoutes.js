const express = require("express");
const router = express.Router();

const {
  createTodo,
  deleteTodo,
  getAllTodos,
} = require("./controllers/todoController");
router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
