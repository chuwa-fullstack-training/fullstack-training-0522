import React, { useState, useEffect } from "react";

function UsersList({ onSelect }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-list">
      <h1>Github Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => onSelect(user.login)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <img src={user.avatar_url} alt={user.login} width="150" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UserProfile({ username }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setUser);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((repos) => setRepos(repos.slice(0, 3)));
  }, [username]);

  if (!user) {
    return <div>loading...</div>;
  }
  return (
    <div className="user-profile">
      <div>
        <img src={user.avatar_url} alt={user.login} width="150" />
      </div>
      <div>
        <h1>{user.name}</h1>
        <h3>Location: {user.location}</h3>
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div class="app">
      <UsersList onSelect={setSelectedUser} />
      <UserProfile username={selectedUser} />
    </div>
  );
}
