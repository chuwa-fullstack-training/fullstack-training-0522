import { Outlet, Navigate, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function Home() {
    const userlog = useMemo(() => localStorage.getItem('user'), []);
    const navigate = useNavigate();
    console.log(userlog);

    const handleLogout = (e) => {
        localStorage.removeItem('user');
        navigate('/login');
    }

    const attribute = '"username"';
    if(userlog){
        return (
            <>
            <nav>
            <h2>Home Welcome!</h2>
           
            <br/>
            <button onClick={(e) => handleLogout(e)}>logout</button>
            </nav>
    
            <Outlet></Outlet>
            </>
            
        );
    }
    return (
        <>
        <nav>
        <h2>Home</h2>
        <Link to="/login">login</Link>
        </nav>

        <Outlet></Outlet>
        </>
        
    );
  }
  