import React, { useState, useEffect } from 'react';
import './GitHubList.css';

const GitHubList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="github-list">
      <div className="user-list">
        {users.map((user) => (
          <div
            key={user.id}
            className={`user ${selectedUser && selectedUser.id === user.id ? 'selected' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            <img src={user.avatar_url} alt="User Avatar" />
            <span>{user.login}</span>
          </div>
        ))}
      </div>
      <div className="user-profile">
        {selectedUser ? (
          <>
            <img src={selectedUser.avatar_url} alt="User Avatar" />
            <h2>{selectedUser.login}</h2>
            <h2>Location: </h2>
            <h3>Repositories:</h3>
          </>
        ) : (
          <p>Select a user to view profile</p>
        )}
      </div>
    </div>
  );
};

export default GitHubList;
