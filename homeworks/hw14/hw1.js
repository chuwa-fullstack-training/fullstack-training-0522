import React from "react";
import "./styles.css";

function UserDisplay({ avatar_url, username,id,sendData , sendRepo}) {
    const repo = [];
    let avatar = ""
    const handleClick = (param) => {
        const url = "https://api.github.com/users/" + param.username +"/repos";

        fetch("https://api.github.com/users/" + param.username)
        .then((res) => res.json())
        .then((data) => {
            avatar = data.avatar_url;
            console.log(avatar);
            sendData(avatar);
           
        });
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            repo.push([data[0].name,data[0].description]);
            repo.push([data[1].name,data[1].description]);
            repo.push([data[2].name,data[2].description]);
            console.log(repo);
            sendRepo(repo);
        })


        
    };

    return (
    <div className="container">
        <span className="span-spacing">{id}</span>
        <span className="span-spacing1" onClick={()=>handleClick({username})}> {username}</span>
      <img className = "span-spacing" src={avatar_url} alt="avatar" width="32" heigh="32" />
      
    </div>
  );
}





class App extends React.Component {
  state = {
    users: [],
    name: "",
    location:"",
    repo:[],
    url:""
  };
  componentDidMount() {
    console.log("component did mount");
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  handleDataReceived = (data) => {
    this.setState({ url: data });
  };

  handleRepoReceived = (data) => {
    this.setState({ repo: data });
  };

  render() {
    return (
      <div>
        <span className="span-spacing"> ID </span>
        <span className="span-spacing1"> Username </span>
        <span className="span-spacing"> Image </span>
        <div className="profile">
            <img className = "span-spacing" src={this.state.url} alt="avatar" width="32" heigh="32" />
       
        
                {this.state.repo.map((dog) => (
          <div>
            <ul className="flex">{dog[0]}</ul>
            <li>{dog[1]}</li>
   
          </div>
        ))}
          
        </div>
        {this.state.users.map((user) => (
          <UserDisplay
            key={user.id}
            id={user.id}
            avatar_url={user.avatar_url}
            username={user.login}
            sendData = {this.handleDataReceived}
            sendRepo = {this.handleRepoReceived}
          />
        ))}


      </div>
    );
  }
}

export default App;