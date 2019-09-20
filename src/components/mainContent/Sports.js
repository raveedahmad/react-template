import React from "react";
import Grid from "@material-ui/core/Grid";
import ImgWithTextOver from "../image_containers/ImgWithTextOver";
import "./Sports.css";
import Link from "@material-ui/core/Link";

const Sports = props => {
  const background = require("../../images/sports.jpg");
  return (
    <div>
      <h2 id="sports-heading">Politics</h2>
      <Link id="sports-link">
        <h6 id="sports-link-text">See all</h6>
      </Link>
      <div id="sports-main" style={{ backgroundColor: "#ECFFED" }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={3} sm={3}>
            <div
              id="sports-img"
              style={{ backgroundImage: `url(${background})` }}
            ></div>
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <ImgWithTextOver />
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <ImgWithTextOver />
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <ImgWithTextOver />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sports;
