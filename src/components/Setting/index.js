import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import TextInput from "../TextInput";
import sha256 from "sha256";

import PP from "../../utils/image/user_icon.svg";
import EDIT_ICON from "../../utils/image/pencil-edit-button.svg";
import LINE_QR from "../../utils/image/line_qr.png";

import MediaAPI from "../../utils/api/apifetcher/media";
import * as actions from "../../containers/Auth/actions";
import { red_alert } from "../../utils/configConst";

import "./style.scss";
import ProfileAPI from "../../utils/api/apifetcher/profile";
import AuthAPI from "../../utils/api/apifetcher/auth";

const Setting = ({}) => {
  const dispatch = useDispatch();
  const { username, avatarUrl, lineId, isRevice } = useSelector(
    state => state.AuthReducer
  );
  const [newUsername, setUsername] = useState("");
  const [nameAlert, setNameAlert] = useState(null);

  const [newAvatarURl, setAvatarUrl] = useState(null);
  const [newAvatarFile, setAvatarFile] = useState(null);
  const [newLineId, setLineId] = useState("");
  const [newIsRevice, setIsRevice] = useState(
    isRevice || lineId === null ? 0 : 1
  );

  const [oldPassword, setOldPassowrd] = useState("");
  const [newPassword, setNewPassowrd] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [passwordAlert, setPasswordAlert] = useState(null);

  const [isEditUsername, setEditUsername] = useState(false);
  const [isEditLine, setEditLine] = useState(false);
  const [isEditPassword, setEditPassword] = useState(false);

  const [error, setError] = useState(null);

  const handleUpdateSubmit = (
    { avatarUrl, username, password, lineId, isRevice },
    handleCancel
  ) => {
    const query = { avatarUrl, username, password, lineId, isRevice };
    actions.updateProfile(query, handleCancel)(dispatch);
  };

  const checkOldPassword = () => {
    return ProfileAPI.checkOldPassword(sha256(oldPassword)).then(
      () => {
        return true;
      },
      () => {
        return false;
      }
    );
  };

  const checkUsernameExist = () => {
    return AuthAPI.verifyUsername(newUsername).then(
      () => {
        setNameAlert(red_alert.REGISTER_USERNAME_EXIST);
        return false;
      },
      () => {
        setNameAlert(null);
        return true;
      }
    );
  };

  const handleUserNameSubmit = async () => {
    if (!newUsername.length) return;
    if (await checkUsernameExist()) {
      handleUpdateSubmit(
        {
          avatarUrl,
          username: newUsername,
          lineId,
          isRevice,
          password: null
        },
        () => {
          setUsername("");
          setEditUsername(false);
        }
      );
    }
  };

  const handlePasswordSubmit = async () => {
    if (!newPassword.length || !oldPassword.length || !confirmPassword.length)
      return;

    if (newPassword !== confirmPassword) {
      setPasswordAlert(red_alert.PASSOWRD_NOT_CONFIRM);
      return;
    }
    const isOldPassowrd = await checkOldPassword();
    if (!isOldPassowrd) {
      setPasswordAlert(red_alert.OLD_PASSOWRD_NOT_CORRECT);
      return;
    }
    handleUpdateSubmit(
      { avatarUrl, username, lineId, isRevice, password: sha256(newPassword) },
      () => {
        setOldPassowrd("");
        setNewPassowrd("");
        setConfirmPassowrd("");
        setEditPassword(false);
      }
    );
  };

  const handleAvatarSubmit = async () => {
    const res = await MediaAPI.uploadImage(newAvatarFile);
    if (res.data) {
      const defaultQuery = {
        avatarUrl,
        username,
        password: null,
        lineId,
        isRevice
      };
      handleUpdateSubmit({ ...defaultQuery, avatarUrl: res.data }, () => {
        setAvatarFile(null);
        setAvatarUrl(null);
      });
    }
  };

  const handleInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "lineId":
        setLineId(value);
        break;
      case "isRevice":
        setIsRevice(parseInt(value));
        break;
      case "oldPassword":
        setOldPassowrd(value);
        break;
      case "newPassword":
        setNewPassowrd(value);
        break;
      case "confirmPassword":
        setConfirmPassowrd(value);
        break;
      default:
        break;
    }
  };
  const passwordInputConst = [
    {
      placeholder: "Old password",
      name: "oldPassword",
      value: oldPassword
    },
    {
      placeholder: "New password",
      name: "newPassword",
      value: newPassword
    },
    {
      placeholder: "Confirm password",
      name: "confirmPassword",
      value: confirmPassword,
      alertMessage: passwordAlert
    }
  ];

  const renderSubmitButton = (query, handleCancel, handleSubmit) => {
    const defaultQuery = {
      avatarUrl,
      username,
      password: null,
      lineId,
      isRevice
    };
    return (
      <>
        <div onClick={handleCancel} className="main_btn btn-cancel">
          Cancel
        </div>
        <div
          onClick={() => {
            handleSubmit({ ...defaultQuery, ...query }, handleCancel);
          }}
          className="main_btn btn-active"
        >
          Submit
        </div>
      </>
    );
  };

  const avatarOnChange = e => {
    const reader = new FileReader();
    reader.onload = function(event) {
      var url = event.target.result;
      setAvatarUrl(url);
    };
    setAvatarFile(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  const renderNameSection = () => {
    if (isEditUsername) {
      return (
        <div>
          Name:
          <TextInput
            type="text"
            name="username"
            onChange={handleInput}
            value={newUsername}
            placeholder={"Username"}
            alertMessage={nameAlert}
          />
          {renderSubmitButton(
            {},
            () => {
              setUsername("");
              setEditUsername(false);
            },
            handleUserNameSubmit
          )}
        </div>
      );
    }
    return (
      <div className="flex">
        Name : {username}
        <img
          className="setting_editIcon"
          src={EDIT_ICON}
          onClick={() => {
            setEditUsername(true);
          }}
        />
      </div>
    );
  };

  const renderAvatarSection = () => {
    return (
      <div>
        <img src={newAvatarURl || avatarUrl || PP} className="w-1/12" />
        <input type="file" onChange={avatarOnChange} />
        {newAvatarURl
          ? renderSubmitButton(
              {},
              () => {
                setAvatarFile(null);
                setAvatarUrl(null);
              },
              handleAvatarSubmit
            )
          : null}
      </div>
    );
  };

  const renderLineSection = () => {
    if (isEditLine) {
      return (
        <div>
          <div>
            <img src={LINE_QR} />
            Scan qr code add line to get line id (Send 'Get id' to get your Line
            Id).
          </div>
          <div>
            Line Id:
            <TextInput
              type="text"
              name="lineId"
              onChange={handleInput}
              value={newLineId}
              placeholder={"Line Id"}
            />
          </div>

          <div>
            Is revice message:
            {[0, 1].map((e, i) => {
              return (
                <div key={`setting_isrevise${i}`}>
                  <input
                    type="radio"
                    name={"isRevice"}
                    value={e}
                    checked={newIsRevice === i}
                    onChange={handleInput}
                  />
                  {i === 0 ? "Yes" : "No"}
                </div>
              );
            })}
          </div>
          {renderSubmitButton(
            { lineId: newLineId, isRevice: newIsRevice === 0 },
            () => {
              setLineId("");
              setIsRevice(isRevice || lineId === null ? 0 : 1);
              setEditLine(false);
            },
            handleUpdateSubmit
          )}
        </div>
      );
    }
    return (
      <div>
        <div className="flex">
          <div>line Id : {lineId || "You have no line id."}</div>
          <img
            className="setting_editIcon"
            src={EDIT_ICON}
            onClick={() => {
              setEditLine(true);
            }}
          />
        </div>
        {lineId ? <div>Is revice line : {isRevice ? "Yes" : "No"}</div> : ""}
      </div>
    );
  };

  const renderPasswordSection = () => {
    if (isEditPassword)
      return (
        <div>
          <form>
            {passwordInputConst.map((e, i) => {
              return (
                <div key={`setting_password${i}`}>
                  {e.placeholder}
                  <TextInput
                    type="password"
                    name={e.name}
                    onChange={handleInput}
                    value={e.value}
                    placeholder={e.placeholder}
                    alertMessage={e.alertMessage}
                  />
                </div>
              );
            })}
          </form>

          {renderSubmitButton(
            {},
            () => {
              setOldPassowrd("");
              setNewPassowrd("");
              setConfirmPassowrd("");
              setEditPassword(false);
            },
            handlePasswordSubmit
          )}
        </div>
      );
    return (
      <div className="flex">
        <div>Passowrd : **********</div>
        <img
          className="setting_editIcon"
          src={EDIT_ICON}
          onClick={() => {
            setEditPassword(true);
          }}
        />
      </div>
    );
  };

  return (
    <div className="setting">
      {renderAvatarSection()}
      {renderNameSection()}
      {renderPasswordSection()}
      {renderLineSection()}
    </div>
  );
};

export default Setting;
