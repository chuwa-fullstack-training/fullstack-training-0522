import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="box">Header</header>
        <nav className="box">Nav</nav>
        <aside className="box">Aside</aside>
        <section className="box">Section</section>
        <footer className="box">Footer</footer>
      </div>
    );
  }
}

export default App;
