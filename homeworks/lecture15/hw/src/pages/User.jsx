import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "./UserDetail";
import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

function User(){
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [repo, setRepo] = useState([]);
    const navigate = useNavigate();
    const url = "https://api.github.com/users";

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(url);
                setData(response.data);
                console.log(data);
            }
            catch(err){
                console.log('Error:', err);
            }
        }

        fetchData();
    }, []);

    const table = {
        textAlign :"center",
        fontSize :'medium',
        position:"absolute",
        left:"1px"
    };

    const handleClick = (user) => {
        // <Link to="/user:login"></Link>
        navigate('/user/:login', {state: user});
        console.log("user clicked: ")
        console.log(user);
    }

    return(
        <div className="userLists" style={{align: "center"}}>
                <table width="40%" style={table}>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Image</th>
                </tr>
                {data.map((item, index) => {
                        return(
                            <tr key={item.id} onClick={() => handleClick(item)}>
                                <td>{item.id}</td>
                                <td >{item.login}</td>
                                <td><img src = {item.avatar_url} width="100px" height="100px"></img></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
    )

}

export default User;