import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import AuthInput from "./components/AuthInput";
import AuthLayout from "./components/AuthLayout";

import * as CONST from "./constents";
import { red_alert } from "../../utils/configConst";
import { REGISTER } from "../../utils/pathConst";

import AuthAPI from "../../utils/api/apifetcher/auth";
import * as actions from "../../containers/Auth/actions";
import sha256 from "sha256";

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

  const handleSubmit = e => {
    AuthAPI.login({ email, password: sha256(password) }).then(
      res => {
        const { data } = res;
        actions.authSuccess(data)(dispatch);
        props.history.push("/dashboard");
      },
      rej => {
        const { status } = rej.response;
        switch (status) {
          case 401:
            setPasswordAlertMsg(red_alert.LOGIN_FAIL);
            setEmailAlertMsg("");
            break;
          case 404:
            setPasswordAlertMsg("");
            setEmailAlertMsg(red_alert.LOGIN_EMAIL_NOT_EXIST);
            break;
          default:
            setPasswordAlertMsg(red_alert.LOGIN_FAIL);
            setEmailAlertMsg("");
            break;
        }
      }
    );
  };
  const handleInputOnblur = e => {};
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
    }
  ];

  return (
    <AuthLayout
      title={CONST.LOGIN_TITLE}
      link={CONST.REGISTER_LINK}
      linkTo={REGISTER}
      submitButtom={CONST.LOGIN_BUTTON}
      handleSubmit={handleSubmit}
      buttonEnable={email && password}
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

export default withRouter(LoginForm);
