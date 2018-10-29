import React, { Component } from "react";
import "./App.css";
import {HashRouter, Route, Switch} from 'react-router-dom'
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import OneWizard from "./components/OneWizard";
import TwoWizard from "./components/TwoWizard";
import ThreeWizard from "./components/ThreeWizard";
import FourWizard from "./components/FourWizard";
import FiveWizard from "./components/FiveWizard";

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Auth}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/wizard/1" component={OneWizard}/>
            <Route path="/wizard/2" component={TwoWizard}/>
            <Route path="/wizard/3" component={ThreeWizard}/>
            <Route path="/wizard/4" component={FourWizard}/>
            <Route path="/wizard/5" component={FiveWizard}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
