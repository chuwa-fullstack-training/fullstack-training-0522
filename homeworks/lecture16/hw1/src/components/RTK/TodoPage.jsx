import React from "react";
import Input from "./Input";
import TodoList from "./TodoList";

export default function TodoPage() {
  return (
    <div className="hw1">
      <h1> Todo List - redux RTK</h1>
      <Input />
      <TodoList />
    </div>
  );
}
