import React, { useState, useEffect } from 'react';

// Main Component
const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  const handleUserClick = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setSelectedUser(data);

    const reposResponse = await fetch(data.repos_url);
    const reposData = await reposResponse.json();
    setRepos(reposData);
  };

  return (
    <div style={{ display: 'flex' }}>
      <UserList users={users} onUserClick={handleUserClick} />
      {selectedUser && <UserProfile user={selectedUser} repos={repos} />}
    </div>
  );
};

// UserList Component
const UserList = ({ users, onUserClick }) => (
  <ul style={{ listStyle: 'none' }}>
    {users.map(user => (
      <li key={user.id} style={{ cursor: 'pointer' }} onClick={() => onUserClick(user.login)}>
        <img src={user.avatar_url} alt={user.login} width="50" />
        <span>{user.login}</span>
      </li>
    ))}
  </ul>
);

// UserProfile Component
const UserProfile = ({ user, repos }) => (
  <div style={{ marginLeft: '50px' }}>
    <img src={user.avatar_url} alt={user.login} width="100" />
    <h2>{user.login}</h2>
    <p>{user.name}</p>
    <h3>Repositories:</h3>
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  </div>
);

export default GithubUsers;
