import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import "./TrendingNewsCard.css";

const TrendingNewsCard = props => {
  return (
    <Grid container spacing={4} id="trendingNewsCard">
      <Grid item className="center-text" md={4}>
        <img className="squircle-img" src={props.img_src} />
      </Grid>
      <Grid item md={8}>
        <h4 id="trendingNewsText">my country is occupied by Russia</h4>
        <h6>
          <Link id="trendingNewsReadMore">Read more...</Link>
        </h6>
      </Grid>
    </Grid>
  );
};

export default TrendingNewsCard;
