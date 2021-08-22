import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ReviewOrder from './Components/ReviewOrder';
import FormOrder from './Components/FormOrder';
import Cart from './Pages/Cart';

ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById('root')
);
