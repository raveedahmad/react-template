import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Star } from "@material-ui/icons";

import "./Header.css";

const Header = props => {
  return (
    <Grid container>
      <Grid item md={3} sm={4} xs={6}>
        <Grid container>
          <Grid item md={4} sm={5} xs={4}>
            <h2 id="header-title">TYAJI</h2>
          </Grid>
          <Grid className="header-links" item md={4} sm={4} xs={4}>
            <Link id="header-link">
              <h4>Home</h4>
            </Link>
          </Grid>
          <Grid className="header-links" item md={4} sm={3} xs={4}>
            <Link id="header-link">
              <h4>Articles</h4>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5} sm={1} xs={0}></Grid>
      <Grid item md={4} sm={7} xs={6}>
        <Grid container>
          <Grid item md={9} sm={9} xs={6}>
            <input id="header-search" type="text" />
          </Grid>
          <Grid item md={1} sm={1} xs={2}>
            <Link>
              <Star id="header-icon" />
            </Link>
          </Grid>
          <Grid item md={1} sm={1} xs={2}>
            <Link>
              <Star id="header-icon" />
            </Link>
          </Grid>
          <Grid item md={1} sm={1} xs={2}>
            <Link href="https://github.com/raveedahmad/react-template">
              <Star id="header-icon" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
