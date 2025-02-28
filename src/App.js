import React from 'react';
import './App.css';
import EnterMeterRead from './EnterMeterRead.js';
import Summary from './Summary.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.js';
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
