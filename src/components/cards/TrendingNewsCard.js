import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import "./TrendingNewsCard.css";

const TrendingNewsCard = props => {
  return (
    <Box display="flex" id="nav-news-card">
      <img id="squircle-img-nav-news" src={props.img_src} />
      <Box display="inline-block">
        <h4 id="trendingNewsText">my country is occupied by Russia</h4>
        <h6>
          <Link id="trendingNewsReadMore">Read more...</Link>
        </h6>
      </Box>
    </Box>
  );
};

export default TrendingNewsCard;
