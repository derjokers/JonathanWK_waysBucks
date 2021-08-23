import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import DetailProduct from './Pages/DetailProduct';
import Landing from './Pages/Landing';
import Admin from './Pages/Admin';

ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);
