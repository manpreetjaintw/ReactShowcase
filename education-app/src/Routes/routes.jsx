import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage";
import Dashboard from '../Pages/Dashboard';

export default function Routes() {
  return (  

        <Router>
        <Switch >
            <Route exact path="/" children={<WelcomePage />} />
            <Route path="/dashboard" children={<Dashboard />} />
        </Switch>
      </Router>
   
  );
}






