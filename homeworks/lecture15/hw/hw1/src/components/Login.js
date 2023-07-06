import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify({ 'username': username, 'password': password }));
    }else{
      let user_auth = JSON.parse(localStorage.getItem("user"));
      if(user_auth['username']===username && user_auth['password']===password){
        navigate("/users");
      }
    }
  };


  return (
    <div>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username:
          <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>

        <label>
          Password:
          <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login