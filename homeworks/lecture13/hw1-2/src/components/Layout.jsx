import React from "react";

let appList = {};
for (let i = 1; i < 21; i++) {
  appList[i] = { info: `you are in app ${i}`, open: false };
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: appList, //id: number,
      cur: "no app opening",
    };
  }

  handleClick = (e) => {
    const id = parseInt(e.target.id);
    const open = this.state.apps[id].open;
    this.setState((prevState) => ({
      cur: open ? "no app opening" : id,
      apps: { ...prevState.apps, [id]: { ...prevState.apps[id], open: !open } },
    }));
  };

  render() {
    return (
      <div className="layout">
        <h1>Layout</h1>
        <div id="phone">
          <div id="screen">
            <div className="status-bar">
              {this.state.apps[this.state.cur]
                ? this.state.apps[this.state.cur].info
                : this.state.cur}
            </div>
            <div id="apps-container">
              {Object.keys(this.state.apps).map((id) => {
                return (
                  <button
                    key={id}
                    id={id}
                    className="app"
                    onClick={(e) => this.handleClick(e)}
                  >
                    {id}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
