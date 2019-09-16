import React from "react";
import SideMenu from "../menu/SideMenu";
import TrendingNewsSide from "../menu/TrendingNewsSide";
import Grid from "@material-ui/core/Grid";
import LeaderBoardMenu from "../menu/LeaderBoardMenu";

function Sidebar() {
  return (
    <div>
      <SideMenu />
      <TrendingNewsSide />
      <LeaderBoardMenu />
    </div>
  );
}

export default Sidebar;
