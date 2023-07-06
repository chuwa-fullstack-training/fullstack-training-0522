import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Users() {

  const [users, setUsers] = useState([]);
  const navigate = new useNavigate();

  const url = 'https://api.github.com/users';
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(url);
        setUsers(response.data);
    };
    fetchData();
  }, [url]);

  const handleClick = (user) => {
    // setSelected(props);
    navigate(`/users/${user.login}`);
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
    </div>
  );
}

export default Users