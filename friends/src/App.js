import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends</Link>
        </header>

        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
