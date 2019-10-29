import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as PATH from "../../utils/pathConst";

import "./header.scss";

const Header = props => {
  const { username } = useSelector(state => state.AuthReducer);

  const handleLogout = () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("profileId");
    props.history.push("/login");
  };

  return (
    <div className="header flex justify-between items-center">
      <div className="text-28">
        <Link to={PATH.DASHBOARD}>ITS</Link>
      </div>
      <div className="header_link_container flex text-16">
        <div className="header_link">{`Hi ${username}`}</div>
        <div className="header_link cursor-pointer" onClick={handleLogout}>
          Logout
        </div>
        <div className="header_link">WorkBoard</div>
        <div className="header_link">Task</div>
      </div>
    </div>
  );
};

export default withRouter(Header);
