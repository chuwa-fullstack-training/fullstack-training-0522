import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>This is the header</header>;
}

function Nav() {
  return <nav>This is the nav</nav>;
}

function Main() {
  return (
    <main>
      <Aside />
      <section>This is the section</section>
    </main>
  );
}

function Aside() {
  return <aside>This is the aside</aside>;
}

function Footer() {
  return <footer>This is the footer</footer>;
}
