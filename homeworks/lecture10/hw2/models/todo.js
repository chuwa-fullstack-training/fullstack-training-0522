const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  todo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Todo", TodoSchema);
