import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AuthInput from "./components/AuthInput";
import AuthLayout from "./components/AuthLayout";

import * as CONST from "./constents";
import { LOGIN } from "../../utils/pathConst";

import AuthAPI from "../../utils/api/apifetcher/auth";
import * as actions from "../../containers/Auth/actions";

const RegisterForm = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailAlertMsg, setEmailAlertMsg] = useState("");

  const [password, setPassword] = useState("");
  const [passwordAlertMsg, setPasswordAlertMsg] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordAlertMsg, setConfirmPasswordAlertMsg] = useState("");

  const [username, setUsername] = useState("");
  const [usernameAlertMsg, setUsernameAlertMsg] = useState("");

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
      case CONST.CONFIRM_PASSOWRD:
        setPassword(value);
        break;
      case CONST.USERNAME:
        setUsername(value);
        break;
      default:
        break;
    }
  };

  return (
    <AuthLayout
      title={CONST.REGISTER_TITLE}
      link={CONST.LOGIN_LINK}
      linkTo={LOGIN}
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
      <AuthInput
        name={CONST.CONFIRM_PASSOWRD}
        type="password"
        onChange={handleInput}
        value={confirmPassword}
        placeholder={CONST.CONFIRM_PASSOWRD_PLACEHOLDER}
        alertMessage={confirmPasswordAlertMsg}
      />
      <AuthInput
        name={CONST.USERNAME}
        type="text"
        onChange={handleInput}
        value={username}
        placeholder={CONST.USERNAME_PLACEHOLDER}
        alertMessage={usernameAlertMsg}
      />
    </AuthLayout>
  );
};

export default RegisterForm;
