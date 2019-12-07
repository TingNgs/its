import React from "react";
import { Link } from "react-router-dom";
import { SIDE_BAR_ITEMS } from "./constants";
import "./index.scss";

const NavSideBar = props => {
  return (
    <div className="nav_sidebar bg-333 flex flex-col">
      {SIDE_BAR_ITEMS.map(item => (
        <Link
          key={`sliderBar_${item.name}`}
          className="nav_sidebar_link text-white font-bold"
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavSideBar;
