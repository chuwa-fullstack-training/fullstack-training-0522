import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';

function UserDetail(){
    const { state } = useLocation();
    console.log(state);
   
    // const [user, setUser] = useState({});
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        const fetchRepo = async () => {
            try{
                const response = await axios.get(state.repos_url);
                // console.log(response);
                setRepo(response.data);
                console.log(repo);
            }
            catch(err){
                console.log('Error:', err);
            }
        };

        fetchRepo();

    }, [state.repos_url]);
    

    

    const card = {
        boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
        width: "500px"
    }

    return(
        <>
        <div style={card}>
                <p>Selected User:</p>
                <img src={state.avatar_url} width="300px" height="300px"></img>
                <h3 style={{color: "blue"}}>{state.login}</h3>
                <h3>Repositories:</h3>
                {repo?.slice(0,3).map((item, index) => {
                        return <li key = {index}>{item.description}</li>
                    })} 
           
        </div>
        </>
    )
}

export default UserDetail;