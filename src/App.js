import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginFrom from "./components/AuthFrom/LoginForm";
import RegisterFrom from "./components/AuthFrom/RegisterFrom";

import * as PATH from "./utils/pathConst";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path={PATH.LOGIN} component={LoginFrom} />
        <Route path={PATH.REGISTER} component={RegisterFrom} />
        <Route path="/" component={LoginFrom} />
      </Router>
    </div>
  );
}

export default App;
