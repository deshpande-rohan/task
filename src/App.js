import React from "react";
import Home from "./pages";
import User from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={User} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
