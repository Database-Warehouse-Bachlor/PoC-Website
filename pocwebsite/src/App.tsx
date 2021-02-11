import React from 'react';
import {Switch, BrowserRouter as  Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Login}  /> 
          <Route path="/dashboard" component={Dashboard}  /> 
      </Switch>
      
    </Router>
  )
}

export default App;
