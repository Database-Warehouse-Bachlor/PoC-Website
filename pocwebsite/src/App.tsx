import React from 'react';
import {Switch, BrowserRouter as  Router, Route} from 'react-router-dom'; 
import Grid from "./Components/Grid";
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Login}  /> 
          <Route path="/dashboard" component={Dashboard}  /> 
      </Switch>
      
      <Grid row={true}>
      <Grid column={true} sm={12} md={4}>
        <h1>Column 1</h1>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <h1>Column 2</h1>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <h1>Column 3</h1>
        
      </Grid>
      <Grid row={true}>
      <Grid column={true} sm={6} md={4}>
        <h1>Column 1</h1>
      </Grid>
      <Grid column={true} sm={7} md={4}>
        <h1>Column 2</h1>
      </Grid>
      <Grid column={true} sm={3} md={2}>
        <h1>Column 3</h1>
        
      </Grid>
      </Grid>
    </Grid>
    </Router>
  )
}

export default App;
