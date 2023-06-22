const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// GET /todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('todos', { todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /todos
router.post('/', async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    // Convert the completed value to a boolean
    const isCompleted = completed === 'on';

    // Create a new todo
    const newTodo = new Todo({
      title,
      description,
      completed: isCompleted,
    });

    // Save the new todo to the database
    const createdTodo = await newTodo.save();

    res.json(createdTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /todos/:id
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /todos/:id
router.put('/:id', async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        completed,
      },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
  try {
    const todoId = req.params.id;

    // Validate the provided ID
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
      return res.status(400).json({ message: 'Invalid todo ID' });
    }

    // Find and delete the todo
    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
