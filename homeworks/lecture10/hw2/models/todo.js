const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
      todo: {
            type: String,
            required: true
      },
      markdown: {
            type: String,
            default: "There's no specific markdown."
      },
      created_time: {
            type: Date,
            default: Date.now
      },
      done: {
            type: Boolean,
            defalut: false
      }
}, { collection: 'todo-list' });

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;