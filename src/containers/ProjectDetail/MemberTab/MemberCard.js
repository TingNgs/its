import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toLocalTime } from "../../../utils/generalUtils";

import ConfirmPopUp from "../../../components/ConfirmPopUp";

import PROFILE_IMAGE from "../../../utils/image/user_icon.svg";
import DELETE from "../../../utils/image/delete.svg";
import EDIT from "../../../utils/image/pencil-edit-button.svg";
import * as actions from "../actions";

import "./style.scss";

const MemberCard = ({ memberDetail, projectDetail }) => {
  const dispatch = useDispatch();
  const {} = useSelector(state => state.ProjectDetailReducer);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleSave = () => {};

  const handleDelete = () => {};

  const renderConfirmButton = () => {
    return (
      <>
        <div
          className="main_btn btn-cancel h-fit mr-1"
          onClick={() => {
            setShowEdit(false);
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
    <div className="flex">{renderConfirmButton()}</div>
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
    </div>
  );
};

export default MemberCard;
