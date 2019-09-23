import React from "react";
import Box from "@material-ui/core/Box";
import "./UserCard.css";

const UserCard = props => {
  return (
    <Box display="flex">
      <img className="profile-image" id="nav-profile-img" src={props.img_src} />
      <Box id="user-nav-div" display="inline-block">
        <h3 id="user-name">Raveed</h3>
        <h5 id="user-info">218 Articles read</h5>
      </Box>
    </Box>
  );
};

export default UserCard;
