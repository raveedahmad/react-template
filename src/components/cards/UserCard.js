import React from "react";
import Grid from "@material-ui/core/Grid";

import "./UserCard.css";

const UserCard = props => {
  return (
    <Grid container spacing={1}>
      <Grid item md={3} xs={3} sm={3} className="center-text">
        <img
          className="profile-image"
          id="nav-profile-img"
          src={props.img_src}
        />
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={7} sm={7} xs={7} item>
        <h3 id="user-name">Raveed</h3>
        <h4 id="user-info">218 Articles read</h4>
      </Grid>
    </Grid>
  );
};

export default UserCard;
