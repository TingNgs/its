import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";

import PP from "../../utils/image/add.svg";

import "./style.scss";

const Setting = ({}) => {
  const dispatch = useDispatch();
  const { username, avatarUrl } = useSelector(state => state.AuthReducer);
  const [newUsername, setUsername] = useState("");

  const [avatarURl, setAvatarUrl] = useState(null);
  const [lineId, setLineId] = useState("");
  const [isRevice, setIsRevice] = useState("");

  const [oldPassword, setOldPassowrd] = useState("");
  const [newPassword, setNewPassowrd] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const [isEditUsername, setEditUsername] = useState(false);

  const renderNameSection = () => {
    return isEditUsername;
  };

  return (
    <Layout isLogined={true}>
      <div className="setting">
        <img src={avatarURl || PP} />

        <div>line Id : {lineId}</div>
        <div>Passowrd : **********</div>
        <div>Is revice line : {isRevice ? "Yes" : "No"}</div>
      </div>
    </Layout>
  );
};

export default Setting;
