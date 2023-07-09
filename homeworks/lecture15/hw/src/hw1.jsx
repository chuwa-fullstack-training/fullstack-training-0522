import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute"
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";

function HW1 (){
    const [user, setUser] = useState(null);

    return(
        <>
        <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p> 404 no page </p>} />
        <Route
          path="/user"
          element={
             <ProtectedRoute>
             <User />
             </ProtectedRoute>
          }
        />
        <Route
          path="/user/:login"
          element={
            
            <UserDetail />
            
          }
        />
        {/* <Route path="/user/" element={ <ProtectedRoute /> } >
            <Route path="/user" element={ <User/> } />
        </Route> */}
    </Routes>
    </BrowserRouter>
        </>
    )
    
}

export default HW1;