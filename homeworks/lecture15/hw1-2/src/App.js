import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./components/hw1/HomePage";
import Login from "./components/hw1/LoginPage";
import UsersList from "./components/hw1/UsersList";
import UserInfo from "./components/hw1/UserInfo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:login" element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
