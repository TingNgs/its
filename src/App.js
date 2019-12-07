import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import LoginFrom from "./components/AuthFrom/LoginForm";
import RegisterFrom from "./components/AuthFrom/RegisterFrom";
import Dashboard from "./components/Dashboard";
import Projects from "./containers/Projects";
import Issue from "./containers/Issue";

import * as PATH from "./utils/pathConst";

import "./App.css";
function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Router basename="/">
        <Route path={PATH.LOGIN} component={LoginFrom} />
        <Route path={PATH.REGISTER} component={RegisterFrom} />
        <Route path={PATH.DASHBOARD} component={Dashboard} />
        <Route path={PATH.PROJECT} component={Projects} />
        <Route path={PATH.ISSUE} component={Issue} />
        <Route path={PATH.SETTING} component={Dashboard} />
        <Route path="/" exact component={LoginFrom} />
      </Router>
    </div>
  );
}

export default App;
