import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalState from "./context/GlobalState";
import CartPage from "./pages/Cart";
import "./App.scss";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import HomePage from "./pages/HomePage";

const App = props => {
  return (
    <GlobalState>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/About" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Contact" component={Contact} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </GlobalState>
  );
};

export default App;
