const express = require('express');
const {
      createNewTodo,
      deleteTodoById
} = require('../controller/todo');
const router = express.Router();

router.post('/todo', createNewTodo);
router.delete('/todo/:id', deleteTodoById);

module.exports = router;