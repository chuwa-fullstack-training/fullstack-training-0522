import { Outlet, Navigate, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function ProtectedRoute({children}){
    const userlog = useMemo(() => localStorage.getItem('user'), []);
    const navigate = useNavigate();
    console.log(userlog);


    if(!userlog){
        return (  
            <>
        <Navigate to="/login" />
        {children}
        </>
            
        );
    }
    //else
    return(
        <>
        <Navigate to="/user" />
        {children}
        </>
    )
}