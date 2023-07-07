import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = ({ onLogin, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      onLogin();
      history.push("/users");
    }
  };

  if (loggedIn) {
    return null; // or render a loading component while redirecting
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/users/user1">User 1</Link>
        </li>
        <li>
          <Link to="/users/user2">User 2</Link>
        </li>
        <li>
          <Link to="/users/user3">User 3</Link>
        </li>
      </ul>
    </div>
  );
};

const UserDetails = ({ match }) => {
  const { login } = match.params;

  return (
    <div>
      <h1>User Details: {login}</h1>
      {/* Display user details */}
    </div>
  );
};

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Login {...props} onLogin={() => {}} />
        )
      }
    />
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Route
          path="/login"
          render={(props) => <Login {...props} onLogin={handleLogin} />}
        />
        <PrivateRoute
          path="/users/:login"
          component={UserDetails}
          loggedIn={loggedIn}
        />
        <PrivateRoute
          path="/users"
          component={Users}
          loggedIn={loggedIn}
        />
      </div>
    </Router>
  );
};

export default App;
