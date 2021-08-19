import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Landing from './Pages/Landing';
import MyProfile from './Components/MyProfile';
import Transaction from './Components/Transaction';
import Profile from './Pages/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
  document.getElementById('root')
);
