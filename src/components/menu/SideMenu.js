import React from "react";
import NavigationMenu from "./NavigationMenu";
import UserCard from "../cards/UserCard";

import "./SideMenu.css";

const SideMenu = props => {
  return (
    <div className="nav-menu">
      <UserCard img_src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.0-9/55776234_1214352295407368_1993362410190143488_n.jpg?_nc_cat=100&_nc_oc=AQms7gPv0KOQ-ujFwLAxaVpIDXFlj5TrLPHN8WajAeKrXStH_yl2gRKLlAqXDddbteY&_nc_ht=scontent.fisb7-1.fna&oh=72581b00e42d18c5c879f02fbb27053b&oe=5E00CF0F" />
      <NavigationMenu />
    </div>
  );
};

export default SideMenu;
