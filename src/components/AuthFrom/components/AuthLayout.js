import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";

import "../auth.scss";

const AuthLayout = props => {
  return (
    <Layout isLogined={false}>
      <div className="auth_layout text-18 flex justify-center items-center w-full h-full min-h-screen bg-blue-400">
        <div className="auth_form mx-auto w-full bg-white rounded">
          <div className="auth_form_title text-blue-600 text-28 inline-block">
            {props.title}
          </div>
          {props.children}
          <Link
            className="auth_bottom_link text-blue-600 text-14 block"
            to={props.linkTo}
          >
            {props.link}
          </Link>
          <span
            className={`main_btn btn-active btn-sm inline-block${
              props.buttonEnable ? "" : " disable"
            }`}
            onClick={props.handleSubmit}
          >
            {props.submitButtom}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default AuthLayout;
