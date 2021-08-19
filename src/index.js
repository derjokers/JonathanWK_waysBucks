import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavbarWaysBucks from './Components/NavbarWaysbucks';
import Jumbotron from './Components/Jumbotron';
import Products from './Components/Products';
import Landing from './Pages/Landing';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);
