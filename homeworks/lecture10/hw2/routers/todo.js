const express = require("express");

const {
  getAllTodos,
  createTodo,
} = require("../controllers/todos");
const router = express.Router();


router.get("/todos", getAllTodos);
router.post("/todos", createTodo);

module.exports = router;