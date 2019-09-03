import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Gas meter read</h1>
      <h1>Electricity meter read</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/enter-meter-read" component={EnterMeterRead} />
          <Route exact path="/gas-summary" component={Summary} />
          <Route exact path="/electric-summary" component={Summary} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
