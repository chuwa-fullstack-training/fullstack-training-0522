import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login(){
    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
        let usernameInput = document.getElementById('username').value;
        let passwordInput = document.getElementById('password').value;
        if(usernameInput){
            localStorage.setItem('user', JSON.stringify({username : usernameInput, password: passwordInput}));
            window.location="/";
        }
      
    }

    return(
        <>
        <h3>Login Page</h3>
        <label>
            Username: <input id = "username" type = "text"></input>
        </label>
        <br/>
        <label>
            Password: <input id = "password" type = "password"></input>
        </label>
        <br/>
        <br/>
        <button onClick={(e) => handleClick(e)}>Submit</button>
        {/* <Link to="/user">user</Link> */}
        </>
    )
}

