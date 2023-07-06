import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const { login } = useParams();

  useEffect(() => {
    if(login){
      const fetchData = async () => {
        const response = await axios.get(`https://api.github.com/users/${login}`);
        setUser(response.data);
        console.log(response.data)
      };
      fetchData();
    }
  }, [login]);

  useEffect(() => {
    if(user){
      const fetchData = async () => {
        const response = await axios.get(user.repos_url);
        setRepos(response.data);
      };
      fetchData();
    }
  }, [user]);


  return (
    <div className="content">
      {user && (
        <>
          <div className="content-avatar">
            <img src={user.avatar_url} alt={user.name}/>
          </div>
          <div className='content-info'>
            <h2>{user.login}</h2>
            <h4>Repositories</h4>
            <div className='repo'>
              {repos.map((repo=>(
                <li key={repo.name}>{repo.name}</li>
              )))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile