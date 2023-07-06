import './UserRepo.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState({});

  function RepoInfo({userInfo}){

    const [repos, setRepos] = useState([]);

    useEffect(() => {
      if(userInfo && userInfo.repos_url){
        const fetchData = async () => {
          const response = await axios.get(userInfo.repos_url);
          setRepos(response.data);
        };
        fetchData();
      }
    }, [userInfo]);


    return (
      <div className="content">
        <div className="content-avatar">
          <img src={userInfo.avatar_url} alt={userInfo.name}/>
        </div>
        <div className='content-info'>
          <h2>{userInfo.login}</h2>
          <h4>Repositories</h4>
          <div className='repo'>
            {repos.slice(0, 4).map((repo=>(
              <li key={repo.name}>{repo.name}</li>
            )))}
          </div>
        </div>
      </div>
    )
  }

  const url = 'https://api.github.com/users';
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(url);
        setUsers(response.data);
    };
    fetchData();
  }, [url]);

  const handleClick = (props) => {
    setSelected(props);
  }

  return (
    <div className="App">
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th onClick={()=> handleClick(user)}>{user.login}</th>
                <th><img className="avatar" src={user.avatar_url} alt={user.id}/></th>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
      {Object.keys(selected).length !== 0 &&<RepoInfo userInfo={selected}/>}
    </div>
  );
}

export default App;
