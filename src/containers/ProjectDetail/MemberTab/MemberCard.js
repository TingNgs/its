import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { toLocalTime } from "../../../utils/generalUtils";
import { IDENTITY_OPTION } from "../../../utils/configConst";

import ConfirmPopUp from "../../../components/ConfirmPopUp";

import PROFILE_IMAGE from "../../../utils/image/user_icon.svg";
import DELETE from "../../../utils/image/delete.svg";
import EDIT from "../../../utils/image/pencil-edit-button.svg";
import * as actions from "../actions";
import ProjectApi from "../../../utils/api/apifetcher/project";

import "./style.scss";

const MemberCard = ({ memberDetail, projectDetail, history }) => {
  const dispatch = useDispatch();
  const [newIdentity, setIdentity] = useState(memberDetail.identity);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  const handleInput = e => {
    setIdentity(e.target.value);
  };

  const handleSave = () => {
    if (newIdentity != memberDetail.identity)
      ProjectApi.updateProjectMember({
        userId: memberDetail.id,
        projectId: projectDetail.id,
        identity: newIdentity
      }).then(() => {
        setShowEdit(false);
        actions.updateProjectMember(memberDetail.id, newIdentity)(dispatch);
      });
    else setShowEdit(false);
  };

  const handleTransfer = () => {
    ProjectApi.updateProjectMember({
      userId: memberDetail.id,
      projectId: projectDetail.id,
      identity: 0
    }).then(() => {
      setShowEdit(false);
      setShowTransfer(false);
      history.push(
        `/p/${memberDetail.username}/${projectDetail.name}?tab=member`
      );
    });
  };

  const handleDelete = () => {
    ProjectApi.removeProjectMember({
      userId: memberDetail.id,
      projectId: projectDetail.id
    }).then(() => {
      setShowDelete(false);
      actions.removeProjecctMember(memberDetail.id)(dispatch);
    });
  };

  const renderConfirmButton = () => {
    return (
      <>
        <div
          className="main_btn btn-cancel h-fit mr-1"
          onClick={() => {
            setShowEdit(false);
            setIdentity(memberDetail.identity);
          }}
        >
          Cancel
        </div>
        <div className="main_btn btn-active h-fit" onClick={handleSave}>
          Save
        </div>
      </>
    );
  };

  const renderEditSection = () => (
    <div className="flex items-center">
      {projectDetail.identity === 0 ? (
        <div
          className="main_btn btn-active h-fit mr-1"
          onClick={() => {
            setShowTransfer(true);
          }}
        >
          Transfer
        </div>
      ) : null}
      <div>
        <select
          className="memberCard_identity"
          name={"identity"}
          onChange={handleInput}
          value={newIdentity}
        >
          {IDENTITY_OPTION.map((optionPlaceHolder, i) => {
            if (i === 0) return null;
            return (
              <option
                value={i}
                key={`memberCard_${memberDetail.id}_${optionPlaceHolder}_${i}`}
              >
                {optionPlaceHolder}
              </option>
            );
          })}
        </select>
      </div>
      {renderConfirmButton()}
    </div>
  );

  const renderEditButton = () => (
    <div className="memberCard_btn_container flex">
      <img
        onClick={() => {
          setShowEdit(true);
        }}
        src={EDIT}
      />
      <img
        onClick={() => {
          setShowDelete(true);
        }}
        src={DELETE}
      />
    </div>
  );

  return (
    <div className="memberCard flex justify-between items-center">
      <div className="flex">
        <img
          className="memberCard_avatar"
          src={memberDetail.avatarUrl || PROFILE_IMAGE}
        />
        {memberDetail.username}--
        {toLocalTime(memberDetail.join_time)}---
        {memberDetail.id}---{memberDetail.identity}
      </div>
      {projectDetail.identity < memberDetail.identity &&
      projectDetail.identity < 2
        ? showEdit
          ? renderEditSection()
          : renderEditButton()
        : null}
      {showDelete ? (
        <ConfirmPopUp
          title={`Delete user ${memberDetail.username} from this project?`}
          handleLeftOption={() => {
            setShowDelete(false);
          }}
          handleRightOption={handleDelete}
          leftOption="Cancel"
          rightOption="Delete"
          isActive={true}
        />
      ) : null}
      {showTransfer ? (
        <ConfirmPopUp
          title={`Transfer this project to ${memberDetail.username}?`}
          handleLeftOption={() => {
            setShowTransfer(false);
          }}
          handleRightOption={handleTransfer}
          leftOption="Cancel"
          rightOption="Transfer"
          isActive={true}
        />
      ) : null}
    </div>
  );
};

export default withRouter(MemberCard);
