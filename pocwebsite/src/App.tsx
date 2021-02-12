import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "./Components/Grid";
import BarChart from "./Components/BarChart";
import LineBarChart from "./Components/LineBarChart";
import PieChart from "./Components/PieChart";
import { Paper } from "@material-ui/core";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
function App() {
  return (
    <Router>
      <Switch>
       <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>

      <Grid row={true}>
        <Grid column={true} sm={12} md={4} justify={"flex-end"}alignItems={"stretch"}   >
          <Paper>
            <BarChart/>
          </Paper>
        </Grid>
        <Grid  alignItems={"stretch"} column={true} sm={12} md={4}>
          <Paper>
          <PieChart/>
          </Paper>
        </Grid>
        <Grid column={true} sm={12} md={4} alignItems={"center"} >
          <Paper>
          <LineBarChart/>
          </Paper>
        </Grid>
       
          <Grid column={true} sm={12} md={4}alignItems={"stretch"} >
            <Paper>
            <LineBarChart/>
            </Paper>
          </Grid>
          <Grid column={true} sm={12} md={4}>
            <Paper>
            <BarChart/>
            </Paper>
          </Grid>
          <Grid column={true} sm={12} md={4}>
            <Paper>
            <PieChart/>
            </Paper>
          </Grid>
        </Grid>
     
    </Router>
  );
}

export default App;
