import React from "react";
import Grid from "@material-ui/core/Grid";
import NewsFeed from "./NewsFeed";
import "./MainContent.css";
import Sports from "./Sports";

const MainContent = props => {
  return (
    <div className="main-content">
      <NewsFeed />
      <Sports />
    </div>
  );
};

export default MainContent;
