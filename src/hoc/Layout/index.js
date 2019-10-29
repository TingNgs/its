import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileAPI from "../../utils/api/apifetcher/profile";

import * as actions from "../../containers/Auth/actions";
import Header from "../../containers/Header";

const Layout = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.isLogined) {
      if (!localStorage.getItem("sessionId")) {
        props.history.push("/login");
        return;
      }
      ProfileAPI.getMyProfile().then(
        res => {
          actions.authSuccess(res.data)(dispatch);
        },
        () => {
          localStorage.removeItem("sessionId");
          localStorage.removeItem("profileId");
          props.history.push("/login");
          return;
        }
      );
    } else {
      if (localStorage.getItem("sessionId")) {
        props.history.push("/dashboard");
        return;
      }
    }
  }, []);
  return (
    <div className="layout">
      {props.isLogined ? <Header /> : ""}
      {props.children}
    </div>
  );
};

export default withRouter(Layout);
