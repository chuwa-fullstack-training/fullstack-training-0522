import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [loginUser, setLoginUser] = useState();

  useEffect(() => {
    setLoginUser(localStorage.getItem("user"));
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoginUser(undefined);
  };

  return (
    <div>
      <h1>Home</h1>
      {loginUser ? (
        <div>
          <div>Welcome, {loginUser}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
