import React, { useEffect, useState } from 'react';
import './App.css';
function UserDisplay({ avatar_url, username, id, handleUserClick, user }) {
  return (
    <tr key={id} onClick={handleUserClick(user)}>
      <td>{id}</td>
      <td>{username}</td>
      <td>
        <img src={avatar_url} alt='avatar' width='40' height='40' />
      </td>
    </tr>
  );
}

function Profile({ user }) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`${user.repos_url}`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  });

  return (
    <div className='profile'>
      <div className='header'>
        <img
          className='userAvatar-profile'
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
        />
        <h2>{user.login}</h2>
      </div>
      <div>
        <p> repositories : </p>
        <ul>
          {repos.length === 0 ? (
            <p>This user has 0 repository</p>
          ) : (
            repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.description}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [clickedUser, setClickedUser] = useState({});
  useEffect(() => {
    console.log(users);
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const handleUserClick = (user) => (e) => {
    console.log(user);
    setClickedUser(user);
  };
  return (
    <div className='Hw1'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UserDisplay
                key={user.id}
                id={user.id}
                avatar_url={user.avatar_url}
                username={user.login}
                handleUserClick={handleUserClick}
                user={user}
              />
            ))
          ) : (
            <span>Loading...</span>
          )}
        </tbody>
      </table>
      <div className='profileSection'>
        {Object.entries(clickedUser).length > 0 && (
          <Profile user={clickedUser} />
        )}
      </div>
    </div>
  );
}
