const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  todo: String,
  done:Boolean

});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;