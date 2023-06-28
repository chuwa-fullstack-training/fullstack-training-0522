import React from "react";

class App extends React.Component {
  render() {
    const headerStyle = {
      border: "2px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      marginTop: "5px"
    };
    const navStyle = {
      border: "2px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70px",
      marginTop: "5px"
    };
    const asideStyle = {
      border: "2px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      width: "30%",
      marginRight: "5px"
    };
    const sectionStyle = {
      border: "2px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      height: "100px"
    };
    const footerStyle = {
      border: "2px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      marginTop: "5px"
    };
    const contentStyle = {
      display: "flex",
      marginTop: "5px"
    };
    return (
      <>
        <div style={headerStyle}>Header</div>
        <div style={navStyle}>Nav</div>
        <div style={contentStyle}>
          <div style={asideStyle}>Aside</div>
          <div style={sectionStyle}>Section</div>
        </div>
        <div style={footerStyle}>Footer</div>
      </>
    );
  }
}

export default App;
