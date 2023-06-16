const Todo = require('../models/todos');
const db = require('../db');

const getAllTodos = async (req, res) => {
    try {
      const users = await Todo.find();

      console.log(users);
      res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
};






const postOneTodo = async (req, res) => {
    try {

      const user = new Todo({id:await Todo.find( {} ).count()+1, done:false, todo:req.body.todo});

      // await db.Todo.insertOne({id:Todo.find( {} ).count(), todo:req.body, done:false});
      await user.save();
      res.status(201).json({ message: 'Todo created' });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };


  const getOneTodo = async (req, res) => {
    try {
      const user = await Todo.find({"id":req.params?.id});
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

  const updateOneTodo = async (req, res) => {
    try {
      // find the user

      const user = await Todo.find({"id":req.params?.id});     

      user[0].done = !user[0].done;
      await user[0].save();
      res.json(user);
    } catch (err) {
      
      res.status(500).json({ message: 'Server Error' });
    }
  };

  const deleteTodo = async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params?.id);
      res.status(204).json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Server Error' })
    }
  };


  module.exports = {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    updateOneTodo,
    getOneTodo
  };