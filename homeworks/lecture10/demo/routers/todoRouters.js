const express = require("express");

const {
    createTodo,
    getAllTodos,
    getOneTodo,
    updateTodo,
    deleteTodo
  } = require('../controllers/todoList');
  const todoRouter = express.Router();

   
   todoRouter.post('/api/todos', createTodo);
   
   todoRouter.get('/',getAllTodos);
   
   todoRouter.get('/api/todos/:id',getOneTodo);
   
   todoRouter.put('/api/todos/:id', updateTodo);
   
   todoRouter.delete('/api/todos/:id', deleteTodo);

   module.exports = todoRouter;