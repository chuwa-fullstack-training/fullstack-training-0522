import React from "react";

class Hw2 extends React.Component {
  render() {
    return (
      <div className="hw2">
        <h2 style={{ border: "none", borderTop: "dotted red 3px" }}>
          Homework 2
        </h2>
        <header>Header</header>
        <nav>Nav</nav>
        <div className="main-content" style={{ border: "none" }}>
          <aside> Aside</aside>
          <section> Section </section>
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default Hw2;s