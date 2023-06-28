import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("user")) {
      console.log(e.target.username.value);
      localStorage.setItem("user", e.target.username.value);
      waitForLogin(100).then(() => navigate(-1));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>note: any username and password are ok to login</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" className="username"></input>
        <input type="password" id="password" className="password"></input>
        <button type="submit" className="login">
          Login
        </button>
      </form>
    </div>
  );
}

function waitForLogin(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
