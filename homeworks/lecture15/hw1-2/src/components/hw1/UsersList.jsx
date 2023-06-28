import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const token = "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";
  const [userLogin, setUserLogin] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (!userLogin) window.location.href = "/login";
    else {
      axios
        .get("https://api.github.com/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const users = response.data;
          let userList = {};
          users.forEach((user) => {
            userList[user.id] = user;
          });
          setUsers(userList);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    }
  }, []);

  const handleUserPage = (e) => {
    localStorage.setItem("userId", e.target.id);
    localStorage.setItem("userUrl", users[parseInt(e.target.id)].url);
    localStorage.setItem("reposUrl", users[parseInt(e.target.id)].repos_url);
    navigate(`/users/${users[e.target.id].login}`);
  };

  return (
    <div className="users-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(users).map(([id, user]) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td
                  id={id}
                  onClick={(e) => handleUserPage(e)}
                  style={{ cursor: "pointer" }}
                >
                  {user.login}
                </td>
                <td>
                  <img
                    src={user.avatar_url}
                    alt="avatar"
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
