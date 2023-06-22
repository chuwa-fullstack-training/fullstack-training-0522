const express = require("express");
const todoRoutes = require("./routers/todoRoutes");
const connectDB = require("./database/connection");

const app = express();

connectDB();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/hw2/api", todoRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));
