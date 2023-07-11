import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function HW1(){
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [repo, setRepo] = useState([]);

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

    const handleClick = (selected)=> {
        console.log(selected);
        setUser(selected);
        const fetchRepo = async () => {
            try{
                const response = await axios.get(selected.repos_url);
                // console.log(response);
                setRepo(response.data);
                console.log(repo);
            }
            catch(err){
                console.log('Error:', err);
            }
        }

        fetchRepo();

    }

    const table = {
        textAlign :"center",
        fontSize :'medium',
        position:"absolute",
        left:"1px"
    }
    const card = {
        boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
        width : "40%",
        position:"absolute",
        left:"800px"
    }
    return (
        <>
        
            <div className="userLists" style={{align: "left"}}>
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

            <div style={card}>
                <p>Selected User:</p>
                <img src={user.avatar_url} width="300px" height="300px"></img>
                <h3 style={{color: "blue"}}>{user.login}</h3>
                <h3>Repositories:</h3>
                {repo?.slice(0,3).map((item, index) => {
                        return <p key = {index}>{item.description}</p>
                    })} 
           
            </div>
       
        </>
    );

    
}


export default HW1;