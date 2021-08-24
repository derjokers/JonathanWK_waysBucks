import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import DetailProduct from "./Pages/DetailProduct";
import Landing from "./Pages/Landing";
import Profile from "./Pages/Profile";
import AddProduct from "./Pages/AddProduct";
import AddTopping from "./Pages/AddTopping";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import LandingUser from "./Pages/LandingUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={LandingUser} />
        <Route exact path="/DetailProduct" component={DetailProduct} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/AddTopping" component={AddTopping} />
        <Route exact path="/Admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
