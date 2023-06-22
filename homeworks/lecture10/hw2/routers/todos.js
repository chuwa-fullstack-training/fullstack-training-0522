const express = require("express");
const {
  getAllTodos,
  createTodo,
  changeTodoState,
  // deleteTodo,
} = require("../controllers/todos");
const router = express.Router();


router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", changeTodoState);
// router.delete("/todos/:id", deleteTodo);

module.exports = router;
