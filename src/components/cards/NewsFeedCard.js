import React from "react";
import Grid from "@material-ui/core/Grid";

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
      <div id="news-feed-card-details">
        <Grid container spacing={1}>
          <Grid item md={4} xs={4} sm={5}>
            <h6 id="news-feed-card-detail">100+ Must Read</h6>
          </Grid>
          <Grid item md={4} xs={4} sm={4}>
            <h6 id="news-feed-card-detail">2 Comments</h6>
          </Grid>
          <Grid item md={4} xs={4} sm={3}>
            <h6 id="news-feed-card-detail">3 Shares</h6>
          </Grid>
        </Grid>
      </div>
      <div id="news-feed-card-options">
        <Grid container>
          <Grid item md={4} xs={4} sm={5}>
            <h5 id="news-feed-card-option">Must Read</h5>
          </Grid>
          <Grid item md={4} xs={5} sm={4}>
            <h5 id="news-feed-card-option">Comment</h5>
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <h5 id="news-feed-card-option">Share</h5>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewsFeedCard;
