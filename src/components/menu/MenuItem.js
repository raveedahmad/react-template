import React from "react";
import Grid from "@material-ui/core/Grid";
import { Star } from "@material-ui/icons";
import Link from "@material-ui/core/Link";

import "./MenuItem.css";

const MenuItem = props => {
  return (
    <Grid container className="center-text" id="menuItem">
      <Grid item md={3} sm={5} xs={4} id="menu-icon">
        <Star className="nav-icons" />
      </Grid>
      <Grid item md={9} sm={7} xs={8} id="menu-text" className="left-text">
        <h4>
          <Link id="menu-item-link">Top Stories</Link>
        </h4>
      </Grid>
    </Grid>
  );
};

export default MenuItem;
