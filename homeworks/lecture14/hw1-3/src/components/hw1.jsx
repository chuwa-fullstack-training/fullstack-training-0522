import React from "react";
import axios from "axios";

class Hw1 extends React.Component {
  state = { users: {}, openUser: null };

  componentDidMount() {
    axios
      .get("https://api.github.com/users", {
        headers: {
          Authorization: "Bearer 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",
        },
      })
      .then((response) => {
        const users = response.data;
        let userList = {};
        users.map((user) => {
          return userList[user.id] = user;
        });
        this.setState((prevState) => ({ ...prevState, users: userList }));
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }

  handleClick = (e) => {
    console.log(e.target.value);
    window.location.href = e.target.value;
  };

  handleOpen = async (e) => {
    const id = parseInt(e.target.id);
    const info = this.state.users[id];
    console.log(id);
    if (id === 31) console.log(info);
    const avatar = info.avatar_url;
    const [location, username] = await axios
      .get(info.url, {
        headers: {
          Authorization: "Bearer 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",
        },
      })
      .then((response) => {
        return [response.data.location, response.data.name];
      });
    const repos = await axios
      .get(info.repos_url, {
        headers: {
          Authorization: "Bearer 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",
        },
      })
      .then((response) => {
        let repos = [];
        response.data.forEach((repo) => {
          repos.push({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
          });
        });
        return repos;
      });
    this.setState((prevState) => ({
      ...prevState,
      openUser: {
        username: username,
        avatar: avatar,
        location: location,
        repos: repos,
      },
    }));
  };

  render() {
    return (
      <div className="hw1">
        <div className="users-container">
          <table>
            <tr>
              <td>ID</td>
              <td>Username</td>
              <td>Image</td>
            </tr>
            <tbody>
              {Object.entries(this.state.users).map(([id, user]) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td
                      id={id}
                      onClick={(e) => this.handleOpen(e)}
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
        <div className="user-info">
          {this.state.openUser ? (
            <div className="user-card">
              <div className="left-card">
                <img
                  src={this.state.openUser.avatar}
                  alt="avatar"
                  style={{ height: "200px", width: "200px" }}
                />
              </div>
              <div className="right-card">
                <div className="username">{this.state.openUser.username}</div>
                <div className="location">
                  Location:&nbsp;{this.state.openUser.location}
                </div>
                <ul>
                  {this.state.openUser.repos.map((repo) => {
                    return (
                      <li key={repo.id}>
                        <a
                          className="mdc-list-item__primary-text"
                          href={repo.url}
                        >
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
      </div>
    );
  }
}

export default Hw1;
