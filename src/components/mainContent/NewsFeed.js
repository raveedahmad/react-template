import React from "react";
import Grid from "@material-ui/core/Grid";
import NewsFeedCard from "../cards/NewsFeedCard";
import { Button } from "@material-ui/core";
import "./NewsFeed.css";

const NewsFeed = props => {
  return (
    <div id="news-feed">
      <h2 id="news-feed-heading">News Feed</h2>
      <h3 id="news-feed-date">Thursday, 21st January 2019</h3>
      <Grid container spacing={10}>
        <Grid item md={6} sm={12} xs={12}>
          <NewsFeedCard />
          <NewsFeedCard />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <NewsFeedCard />
          <NewsFeedCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsFeed;
