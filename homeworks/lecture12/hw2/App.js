import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <h2>Header</h2>
      </div>

      <div className="nav">
        <h2>Nav</h2>
      </div>

      <div className="row">
        <div className="column side"><h2>Aside</h2></div>
        <div className="column middle"><h2>Section</h2></div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
