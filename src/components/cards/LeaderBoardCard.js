import React from "react";
import Grid from "@material-ui/core/Grid";

import "./LeaderBoardCard.css";

const LeaderBoardCard = props => {
  return (
    <Grid
      container
      id="leaderboard-card"
      style={{ backgroundColor: `${props.color}` }}
    >
      <Grid item md={1} xs={1} sm={1} className="center-text">
        <h3 id="leader-position">#1</h3>
      </Grid>
      <Grid item md={3} xs={3} sm={3} className="center-text">
        <img id="leaderboard-img" src={props.img_src} />
      </Grid>
      <Grid item md={5} sm={5} xs={5}>
        <h6>Sanisikim Bunan</h6>
      </Grid>
      <Grid item md={3} xs={3} sm={3}>
        <h6>221 pts</h6>
      </Grid>
    </Grid>
  );
};

export default LeaderBoardCard;
