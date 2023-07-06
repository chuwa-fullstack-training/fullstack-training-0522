![layout](https://tutorial.techaltum.com/images/css-layout.jpg)


Implement the layout shown above in React component.

import React from 'react';
import './App.css'; // Assuming you're styling your components in App.css

const App = () => {
  return (
    <div className='container'>
      <div className='header'>Header</div>
      <div className='nav'>Nav</div>
      <div className='main'>
        <div className='aside'>Aside</div>
        <div className='section'>Section</div>
      </div>
      <div className='footer'>Footer</div>
    </div>
  );
}

export default App;
