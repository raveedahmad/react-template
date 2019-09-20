import React from "react";
import SideMenu from "../menu/SideMenu";
import TrendingNewsSide from "../menu/TrendingNewsSide";
import Grid from "@material-ui/core/Grid";
import LeaderBoardMenu from "../menu/LeaderBoardMenu";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar">
      <SideMenu />
      <TrendingNewsSide />
      <LeaderBoardMenu />
    </div>
  );
}

export default Sidebar;
