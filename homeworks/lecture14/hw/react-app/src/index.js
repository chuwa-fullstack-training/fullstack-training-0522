import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserRepo from './UserRepo';
import ColorComponent from './ColorComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserRepo />
    {/* <ColorComponent /> */}
  </React.StrictMode>
);

