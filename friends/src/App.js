import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </header>

        <Route path="/login" component={Login} />
        <Route exact path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
