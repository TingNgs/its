import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, withRouter } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

import AuthApi from "../../utils/api/apifetcher/auth";
import * as actions from "./actions";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Auth = props => {
  const dispatch = useDispatch();
  const [authFail, setAuthFail] = useState(false);
  const [email, setEmail] = useState("");
  const key = useQuery().get("key");
  const id = useQuery().get("id");
  useEffect(() => {
    if (key && id) {
      AuthApi.unlock(key, id).then(
        res => {
          const { data } = res;
          actions.authSuccess(data)(dispatch);
          props.history.push("/dashboard");
        },
        rej => {
          setAuthFail(true);
        }
      );
    } else {
      setAuthFail(true);
    }
  }, []);

  const handleInput = e => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    AuthApi.send(email);
    setEmail("");
  };

  if (authFail)
    return (
      <div className="w-full h-screen flex justify-center items-center text-28 flex-col">
        Please verify your email !
        <input
          input="text"
          placeholder="Email"
          value={email}
          onChange={handleInput}
        />
        <div className="main_btn btn-active" onClick={handleSendEmail}>
          Send again
        </div>
      </div>
    );
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};

export default withRouter(Auth);
