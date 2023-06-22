// import modules
const express = require("express");
const mongoose = require("mongoose");

// destructure schema
const { Schema } = mongoose;

// connect to db
mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// todo list schema
const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

app = express();
app.use(express.urlencoded({ extended: true })); // middleware `urlencode` for parsing the request body
app.set("view engine", "pug"); // pug as view engine

// route for the home page

// route for handling creating new todos

// route for updating a todo

// route for deleting a todo

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
