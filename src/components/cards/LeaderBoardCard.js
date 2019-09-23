import React from "react";
import Box from "@material-ui/core/Box";

import "./LeaderBoardCard.css";

const LeaderBoardCard = props => {
  return (
    <Box
      id="leaderboard-card"
      display="flex"
      style={{ backgroundColor: `${props.color}` }}
    >
      <h3 id="leader-position">#1</h3>
      <img id="leaderboard-img" src={props.img_src} />
      <h6 id="nav-leader-name">Sanisikim Bunan</h6>
      <h6 id="nav-leader-pts">221 pts</h6>
    </Box>
  );
};

export default LeaderBoardCard;
