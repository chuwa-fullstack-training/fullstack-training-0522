import './App.css';
import { Route, Routes } from "react-router-dom";
import React from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
              
          }
        />
        <Route
          path="/users/:login"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>  
    </div>
  );
}

export default App;
