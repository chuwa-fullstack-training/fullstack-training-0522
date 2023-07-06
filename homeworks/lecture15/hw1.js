import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// UserList Component
const UserList = ({ users }) => (
  <ul style={{ listStyle: 'none' }}>
    {users.map(user => (
      <li key={user.id} style={{ cursor: 'pointer' }}>
        <Link to={`/user/${user.login}`}>
          <img src={user.avatar_url} alt={user.login} width="50" />
          <span>{user.login}</span>
        </Link>
      </li>
    ))}
  </ul>
);

// UserProfile Component
const UserProfile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`https://api.github.com/users/${match.params.username}`);
      const data = await response.json();
      setUser(data);

      const reposResponse = await fetch(data.repos_url);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    };

    getUser();
  }, [match.params.username]);

  return user ? (
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
  ) : null;
};

// Main Component
const GithubUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Route
          path="/"
          exact
          render={(props) => <UserList {...props} users={users} />}
        />
        <Route
          path="/user/:username"
          component={UserProfile}
        />
      </div>
    </Router>
  );
};

export default GithubUsers;
