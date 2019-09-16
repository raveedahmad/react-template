import React from "react";
import MenuItem from "./MenuItem";
import Grid from "@material-ui/core/Grid";

import "./NavigationMenu.css";

const NavigationMenu = props => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Grid container>
        <Grid item md={3} sm={5} xs={4} id="upper">
          <h4></h4>
        </Grid>
        <Grid item md={9} sm={7} xs={8}></Grid>
      </Grid>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <Grid container>
        <Grid item md={3} sm={5} xs={4} id="lower">
          <h4></h4>
        </Grid>
        <Grid item md={9} sm={7} xs={8}></Grid>
      </Grid>
    </div>
  );
};

export default NavigationMenu;
