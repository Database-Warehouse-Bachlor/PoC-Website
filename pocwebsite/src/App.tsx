import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "./Components/Grid";
import Login from "./Pages/Login";
import { Paper } from "@material-ui/core";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>

      <Grid row={true}>
        <Grid column={true} sm={12} md={4}>
          <Paper>
            <h1>Column 1</h1>
          </Paper>
        </Grid>
        <Grid column={true} sm={12} md={4}>
          <Paper>
            <h1>Column 1</h1>
          </Paper>
        </Grid>
        <Grid column={true} sm={12} md={4}>
          <Paper>
            <h1>Column 1</h1>
          </Paper>
        </Grid>
       
          <Grid column={true} sm={12} md={4}>
            <Paper>
              <h1>Column 5</h1>
            </Paper>
          </Grid>
          <Grid column={true} sm={12} md={4}>
            <Paper>
              <h1>Column 1</h1>
            </Paper>
          </Grid>
          <Grid column={true} sm={12} md={4}>
            <Paper>
              <h1>Column 1</h1>
            </Paper>
          </Grid>
        </Grid>
     
    </Router>
  );
}

export default App;
