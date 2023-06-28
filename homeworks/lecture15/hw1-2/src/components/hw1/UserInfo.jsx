import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserInfo() {
  const token = "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";
  const [userLogin, setUserLogin] = useState(localStorage.getItem("user"));

  const getRepos = async () => {
    try {
      const response = await axios.get(localStorage.getItem("reposUrl"), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let reposList = [];
      response.data.forEach((repo) => {
        reposList.push({
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
        });
      });

      return reposList;
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get(localStorage.getItem("userUrl"), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const reposList = await getRepos();
      return {
        avatar: response.data.avatar_url,
        location: response.data.location,
        name: response.data.name,
        repos: reposList,
      };
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  const [user, setUser] = useState();
  useEffect(() => {
    if (!userLogin) window.location.href = "/login";
    (async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    })();
  }, []);

  return (
    <div className="user-info">
      {user ? (
        <div className="user-card">
          <div className="left-card">
            <img
              src={user.avatar}
              alt="avatar"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="right-card">
            <div className="username">{user.name}</div>
            <div className="location">Location:&nbsp;{user.location}</div>
            <ul>
              {user.repos.map((repo) => {
                return (
                  <li key={repo.name}>
                    <a className="mdc-list-item__primary-text" href={repo.url}>
                      {repo.name}
                    </a>
                    {repo.description ? (
                      <p className="mdc-list-item__secondary-text">
                        {repo.description}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
