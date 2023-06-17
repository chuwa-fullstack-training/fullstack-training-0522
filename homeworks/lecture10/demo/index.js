const express = require("express");
const {
  getAllTodos,
  deleteTodo,
  createTodo,
  updateTodo,
} = require("./controllers/todo");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

const todos = [
  { id: 1, todo: "first thing", done: true },
  { id: 2, todo: "second thing", done: false },
  { id: 3, todo: "third thing", done: false },
];

app.get("/", getAllTodos);
app.post("/api/todos", createTodo);
app.put("/api/todos/:id", updateTodo);
app.delete("/api/todos/:id", deleteTodo);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
