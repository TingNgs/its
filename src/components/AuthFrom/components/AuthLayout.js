import React from "react";
import { Link } from "react-router-dom";

import "../auth.scss";

const AuthLayout = props => {
  return (
    <div className="auth_layout text-18 flex justify-center items-center w-full h-full min-h-screen bg-blue-400">
      <div className="auth_form mx-auto w-full bg-white rounded">
        <div className="auth_form_title text-28 inline-block">
          {props.title}
        </div>
        {props.children}
        <Link to={props.linkTo}>{props.link}</Link>
      </div>
    </div>
  );
};

export default AuthLayout;
