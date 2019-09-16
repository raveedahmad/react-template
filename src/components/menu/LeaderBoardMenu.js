import React from "react";
import LeaderBoardCard from "../cards/LeaderBoardCard";
import { Button } from "@material-ui/core";
import "./LeaderBoardMenu.css";
//import { PlayWithFriends } from "../buttons/buttons";

const LeaderBoardMenu = props => {
  return (
    <div id="leaderboard-menu">
      <h4 id="leaderboard-menu-heading">Leaderboards</h4>
      <LeaderBoardCard
        color="#fbefa2"
        img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F"
      />
      <LeaderBoardCard img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F" />
      <LeaderBoardCard
        color="#F6F6F6"
        img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F"
      />
      <LeaderBoardCard img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F" />
      <LeaderBoardCard
        color="#F6F6F6"
        img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F"
      />
      <LeaderBoardCard img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F" />
      <div id="leaderboard-button-div">
        <Button id="leaderboard-button">Play with Friends</Button>
        {/*<PlayWithFriends>Hello</PlayWithFriends>*/}
      </div>
    </div>
  );
};

export default LeaderBoardMenu;
