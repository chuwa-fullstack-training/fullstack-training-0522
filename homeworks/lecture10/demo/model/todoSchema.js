const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
