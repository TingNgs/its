import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import AuthInput from "./components/AuthInput";
import AuthLayout from "./components/AuthLayout";

import * as CONST from "./constents";
import { red_alert } from "../../utils/configConst";
import { LOGIN } from "../../utils/pathConst";

import AuthAPI from "../../utils/api/apifetcher/auth";
import * as actions from "../../containers/Auth/actions";
import sha256 from "sha256";

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
        setConfirmPassword(value);
        break;
      case CONST.USERNAME:
        setUsername(value);
        break;
      default:
        break;
    }
  };

  const checkEmailExist = () => {
    if (!email) {
      setEmailAlertMsg("");
      return false;
    }
    return AuthAPI.verifyEmail(email).then(
      () => {
        setEmailAlertMsg(red_alert.REGISTER_EMAIL_EXIST);
        return false;
      },
      () => {
        setEmailAlertMsg("");
        return true;
      }
    );
  };

  const checkUsernameExist = () => {
    if (!username) {
      setUsernameAlertMsg("");
      return false;
    }
    return AuthAPI.verifyUsername(username).then(
      () => {
        setUsernameAlertMsg(red_alert.REGISTER_USERNAME_EXIST);
        return false;
      },
      () => {
        setUsernameAlertMsg("");
        return true;
      }
    );
  };

  const handleSubmit = async e => {
    if ((await checkEmailExist()) && (await checkUsernameExist())) {
      handleRegister();
    }
  };

  const handleRegister = () => {
    AuthAPI.register({ email, password: sha256(password), username }).then(
      res => {
        const { data } = res;

        actions.authSuccess(data)(dispatch);
        props.history.push("/dashboard");
      },
      rej => {
        setUsernameAlertMsg(red_alert.REGISTER_FAIL);
      }
    );
  };

  const handleInputOnblur = async e => {
    const { name } = e.target;
    switch (name) {
      case CONST.EMAIL:
        checkEmailExist();
        break;
      case CONST.USERNAME:
        checkUsernameExist();
        break;
      default:
        break;
    }
  };

  const inputList = [
    {
      name: CONST.EMAIL,
      type: "text",
      value: email,
      placeholder: CONST.EMAIL_PLACEHOLDER,
      alertMessage: emailAlertMsg
    },
    {
      name: CONST.PASSOWRD,
      type: "password",
      value: password,
      placeholder: CONST.PASSWORD_PLACEHOLDER,
      alertMessage: passwordAlertMsg
    },
    {
      name: CONST.CONFIRM_PASSOWRD,
      type: "password",
      value: confirmPassword,
      placeholder: CONST.CONFIRM_PASSOWRD_PLACEHOLDER,
      alertMessage: confirmPasswordAlertMsg
    },
    {
      name: CONST.USERNAME,
      type: "text",
      value: username,
      placeholder: CONST.USERNAME_PLACEHOLDER,
      alertMessage: usernameAlertMsg
    }
  ];

  return (
    <AuthLayout
      title={CONST.REGISTER_TITLE}
      link={CONST.LOGIN_LINK}
      linkTo={LOGIN}
      submitButtom={CONST.REGISTER_BUTTON}
      handleSubmit={handleSubmit}
      buttonEnable={
        email && password && password === confirmPassword && username
      }
    >
      {inputList.map(e => (
        <AuthInput
          key={e.name}
          name={e.name}
          type={e.type}
          onChange={handleInput}
          value={e.value}
          placeholder={e.placeholder}
          alertMessage={e.alertMessage}
          onblur={handleInputOnblur}
        />
      ))}
    </AuthLayout>
  );
};

export default withRouter(RegisterForm);
