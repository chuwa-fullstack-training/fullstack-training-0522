const Todo = require('../models/todo');

const createNewTodo = async (req, res) => {
      try {
            const todoDetail = req.body;
            const todo = new Todo(todoDetail);

            await todo.save();
            res.status(201).json({ message: `Todo ${todoDetail.todo} created!` });
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Create new todo failed !!' });
      }
};

const deleteTodoById = async (req, res) => {
      try {
            const todoID = req.params?.id;
            await Todo.findByIdAndDelete(todoID);
            res.status(204).json({ message: 'Delete success! ' });
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Delete todo by id failed !!' });
      }
}

const getAllTodos = async () => {
      try {
            const todos = await Todo.find();
            console.log('Found all todos!', todos);
            return todos;
      } catch (error) {
            console.error('Error in finding all todos', error);
      }
}

module.exports = {
      createNewTodo,
      deleteTodoById,
      getAllTodos
}