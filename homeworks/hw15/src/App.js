import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Login from './components/login';
import Home from './hw1'

function App() {
  return (
    <div className="App">
     



     
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>


 
    </div>
  );
}

export default App;