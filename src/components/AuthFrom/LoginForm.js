import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AuthInput from "./components/AuthInput";
import AuthLayout from "./components/AuthLayout";

import * as CONST from "./constents";
import { REGISTER } from "../../utils/pathConst";

import AuthAPI from "../../utils/api/apifetcher/auth";
import * as actions from "../../containers/Auth/actions";

const LoginForm = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailAlertMsg, setEmailAlertMsg] = useState("");

  const [password, setPassword] = useState("");
  const [passwordAlertMsg, setPasswordAlertMsg] = useState("");

  const handleInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    switch (name) {
      case CONST.EMAIL:
        setEmail(value);
        break;
      case CONST.PASSOWRD:
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <AuthLayout
      title={CONST.LOGIN_TITLE}
      link={CONST.REGISTER_LINK}
      linkTo={REGISTER}
    >
      <AuthInput
        name={CONST.EMAIL}
        type="text"
        onChange={handleInput}
        value={email}
        placeholder={CONST.EMAIL_PLACEHOLDER}
        alertMessage={emailAlertMsg}
      />
      <AuthInput
        name={CONST.PASSOWRD}
        type="password"
        onChange={handleInput}
        value={password}
        placeholder={CONST.PASSWORD_PLACEHOLDER}
        alertMessage={passwordAlertMsg}
      />
    </AuthLayout>
  );
};

export default LoginForm;
