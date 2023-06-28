import './App.css';
import { useState } from 'react';

function App() {
  const [pressButs] = useState([
    { name: "key1" ,value: 1},
    { name: "key2" ,value: 2},
    { name: "key3" ,value: 3},
    { name: "key4" ,value: 4},
    { name: "key5" ,value: 5},
    { name: "key6" ,value: 6},
    { name: "key7" ,value: 7},
    { name: "key8" ,value: 8},
    { name: "key9" ,value: 9},
    { name: "key10" ,value: 10},
    { name: "key11" ,value: 11},
    { name: "key12" ,value: 12},
    { name: "key13" ,value: 13},
    { name: "key14" ,value: 14},
    { name: "key15" ,value: 15},
    { name: "key16" ,value: 16}
  ]);

  const handleClick = (number) => {
    alert(number + " is pressed!");
  }

  return (
    <div className="App">
      <div className="buttonContent">
        {
          pressButs.map(pressBut=>(<div key={pressBut.name}>
            <button className="buttons" type="button" onClick={()=> handleClick(pressBut.name)}>{pressBut.value}</button>
          </div>))
        }
      </div>
    </div>
  );
}

export default App;
