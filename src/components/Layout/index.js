import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileAPI from "../../utils/api/apifetcher/profile";

import * as actions from "../../containers/Auth/actions";

import Header from "./Header";
import NavSideBar from "./NavSideBar";

const Layout = ({ isLogined, history, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogined) {
      if (!localStorage.getItem("sessionId")) {
        actions.logout()(dispatch);
        history.push("/login");
        return;
      }
      ProfileAPI.getMyProfile().then(
        res => {
          actions.authSuccess(res.data)(dispatch);
        },
        () => {
          actions.logout()(dispatch);
          history.push("/login");
          return;
        }
      );
    } else {
      if (localStorage.getItem("sessionId")) {
        history.push("/dashboard");
        return;
      }
    }
  }, []);
  return (
    <div className="layout min-h-screen flex flex-col">
      {isLogined ? (
        <React.Fragment>
          <Header />
          <div className="flex flex-grow">
            <NavSideBar />
            {children}
          </div>
        </React.Fragment>
      ) : (
        children
      )}
    </div>
  );
};

export default withRouter(Layout);
