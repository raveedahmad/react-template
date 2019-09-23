import React from "react";
import Box from "@material-ui/core/Box";

import "./NewsFeedCard.css";

const NewsFeedCard = props => {
  const background = require("../../images/download.jpg");
  return (
    <div id="news-feed-card">
      <div
        style={{ backgroundImage: `url(${background})` }}
        id="news-feed-card-image"
      >
        <h4 className="on-image-region">country</h4>
      </div>
      <div id="news-feed-card-text">
        <h4 id="news-feed-card-heading">
          Car accident in New Yourk: One man was murdered
        </h4>
        <h6 id="news-feed-des">
          President Trump woke up on Sunday morning, gazed out at the nation he
          leads, saw the dry kindling of race relations and decided to throw a
          match on it. It was not the first time, nor is it likely to be the
          last. He has a pretty large carton. President Trump woke up on Sunday
          morning, gazed out at the nation he leads, saw the dry kindling of
          race relations and decided to throw a match on it. It was not the
          first time, nor is it likely to be the last. He has a pretty large
          carton.
        </h6>
      </div>
      <Box display="flex" id="news-feed-card-details">
        <h6 id="news-feed-card-detail">100+ Must Read</h6>
        <h6 id="news-feed-card-detail">2 Comments</h6>
        <h6 id="news-feed-card-detail">3 Shares</h6>
      </Box>
      <Box display="flex" id="news-feed-card-options">
        <h5 id="news-feed-card-option">Must Read</h5>

        <h5 id="news-feed-card-option">Comment</h5>

        <h5 id="news-feed-card-option">Share</h5>
      </Box>
    </div>
  );
};

export default NewsFeedCard;
