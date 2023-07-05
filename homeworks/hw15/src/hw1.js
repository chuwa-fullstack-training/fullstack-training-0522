import { Routes, Route, Link } from "react-router-dom";
import './styles.css';

export default function App(){
    return(
        <div className="block">
            <h1> Home </h1>
            <Link to="/login" style={{display: 'flex',  justifyContent:'center', height: '100vh'}}>Login</Link>
        </div>
    


    )
}