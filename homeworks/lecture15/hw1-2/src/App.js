import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/hw1/HomePage";
import Login from "./components/hw1/LoginPage";
import UsersList from "./components/hw1/UsersList";
import UserInfo from "./components/hw1/UserInfo";
import BoxController from "./components/hw2/BoxController";
import Box from "./components/hw2/Box";
function App() {
  if (!localStorage.getItem("boxes")) {
    localStorage.setItem(
      "boxes",
      JSON.stringify({
        1: { name: "first", color: "grey" },
        2: { name: "second", color: "grey" },
        3: { name: "third", color: "grey" },
      })
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:login" element={<UserInfo />} />
        <Route path="/hw2" element={<BoxController />} />
        <Route path="/hw2/:box" element={<Box />} />
      </Routes>
    </Router>
  );
}

export default App;
