const express = require('express');
const {
   getAllTodos,
   postOneTodo,
   deleteTodo,
   updateOneTodo,
   getOneTodo

} = require('../controllers/todo');
const router = express.Router();

router.get('/todos', getAllTodos);
router.get('/todos/:id', getOneTodo);
router.post('/todos', postOneTodo);

router.put('/todos/:id', updateOneTodo);


router.delete('/todos/:id', deleteTodo);

module.exports = router;