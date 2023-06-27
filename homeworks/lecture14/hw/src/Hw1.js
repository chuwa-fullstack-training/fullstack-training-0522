import React, { useState, useEffect } from 'react';
import './Hw1.css';

function Profile({ user }) {
      const [repos, setRepos] = useState([]);

      useEffect(() => {
            fetch(`${user.repos_url}`)
                  .then(res => res.json())
                  .then((data) => setRepos(data));
      }, [repos]);

      return (
            <div className="profile">
                  <div className="header">
                        <img className="userAvatar-profile" src={user.avatar_url} alt={`${user.login}'s avatar`} />
                        <h3>{user.login}</h3>
                  </div>
                  <div className='repos'>
                        <p> repositories : </p>
                        <ul>
                              {
                                    repos.length === 0 ? <p>This user has 0 repository</p> :
                                          repos.map(repo => (
                                                <li key={repo.id}>
                                                      <a href={repo.html_url}>{repo.name}</a>
                                                      <p>{repo.description}</p>
                                                </li>
                                          ))
                              }
                        </ul>
                  </div>

            </div >
      )
}
export default function Hw1() {
      const [users, setUsers] = useState([]);
      const [selectedUser, setSelectedUser] = useState({});

      useEffect(() => {
            fetch("https://api.github.com/users")
                  .then((res) => res.json())
                  .then((data) => setUsers(data));
      }, [users]);

      const handleUserClick = (user) => (e) => {
            console.log(user)
            setSelectedUser(user);
      };

      // Render
      return (
            <div className="Hw1">
                  <div className="users">
                        <table>
                              <caption>
                                    <h1> Users List </h1>
                              </caption>
                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>Username</th>
                                          <th>Avatar</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {users.map((user) => (
                                          <tr key={user.id} user={user} onClick={handleUserClick(user)}>
                                                <td>{user.id}</td>
                                                <td>{user.login}</td>
                                                <td>
                                                      <img
                                                            className="userAvatar"
                                                            src={user.avatar_url}
                                                            alt={`${user.login}'s avatar`}
                                                      />
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
                  <div className="profileSection">
                        {Object.entries(selectedUser).length > 0 && <Profile user={selectedUser} />}
                  </div>
            </div>
      );
}