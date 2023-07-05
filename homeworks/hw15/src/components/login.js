import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'


function Signin() {
    let navigate = useNavigate();

    const Redirect = () =>{

        let path = './user';
        console.log(path);
        navigate(path);
    }

  return (
    <>
    <div className="loginform">

    <form className="login-form" >
        <label htmlFor="email">email</label>
        <input  placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" placeholder="********" id="password" name="password" />
        <button type="submit" onClick={()=> navigate("/")}>Sign In</button>
    </form>

    </div>  
    </>
  )
}

export default Signin;