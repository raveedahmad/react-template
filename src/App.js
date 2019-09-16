import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <Grid container>
        <Grid item md={3} sm={7} xs={7}>
          <Sidebar />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default App;
