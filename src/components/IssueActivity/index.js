import React, { useState } from "react";

import FormInput from "../FormInput";
import CardLayout from "../CardLayout";

import PROFILE_IMAGE from "../../utils/image/user_icon.svg";
import OPEN_BOX from "../../utils/image/open-box.svg";
import {
  STATE_OPTION,
  SEVERITY_OPTION,
  PRIORITY_OPTION,
  inputType
} from "../../utils/configConst";
import "./style.scss";
import FormFooterBtn from "../FormFooterBtn";

const IssueActivity = ({ activity, handleEditComment }) => {
  const [showEditComment, setEditComment] = useState(false);
  const [mentionList, setMentionList] = useState([]);
  const [comment, setComment] = useState(activity.content);
  const type = ["state", "severity", "priority", "Reproducible"];
  const typeValue = [
    STATE_OPTION,
    SEVERITY_OPTION,
    PRIORITY_OPTION,
    ["Yes", "No"]
  ];

  if (activity.type === 0) {
    const getMentionList = value => {
      const doc = document.createElement("div");
      doc.innerHTML = value;
      const mentionDomList = doc.getElementsByClassName("mention");
      return Array.from(mentionDomList).map(e => {
        return e.dataset.value;
      });
    };
    const handleCancel = () => {
      setComment(activity.content);
      setMentionList([]);
      setEditComment(false);
    };
    const handleSubmit = () => {
      handleEditComment(
        {
          comment,
          mentionList,
          activityId: activity.id,
          issueId: activity.issueId
        },
        handleCancel
      );
    };
    const handleEditorInput = value => {
      setComment(value === "<p><br></p>" ? "" : value);
      const oldMentionList = getMentionList(activity.content);
      const newMentionList = getMentionList(value);
      setMentionList(
        newMentionList.filter(
          (item, pos) =>
            newMentionList.indexOf(item) === pos &&
            oldMentionList.indexOf(item) === -1
        )
      );
    };
    const inputList = [
      {
        value: comment,
        handleInput: handleEditorInput,
        inputType: inputType.editor
      }
    ];
    return (
      <div className="issueActivity text-16 mt-3 mb-3">
        <div className="flex justify-between">
          <div>{activity.username} commented: </div>

          {!showEditComment &&
          activity.userId === parseInt(localStorage.getItem("profileId")) ? (
            <div
              className="main_btn btn-active"
              onClick={() => {
                setEditComment(true);
              }}
            >
              Edit
            </div>
          ) : null}
        </div>
        <CardLayout>
          {showEditComment ? (
            <>
              <FormInput inputList={inputList} />
              <FormFooterBtn
                handleLeftOption={handleCancel}
                handleRightOption={handleSubmit}
                rightOption={comment ? "Save" : "Delete"}
                isActive={true}
              />
            </>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: activity.content }} />
          )}
        </CardLayout>
      </div>
    );
  }
  if (activity.type === 5) {
    return (
      <div className="issueActivity text-16 mt-3 mb-3">
        {activity.username} assigned:
        {activity.assignList.map((e, i) => {
          return e.isAdd ? (
            <div key={`issueActivity_assign${e}_${i}`}>{e.username}</div>
          ) : (
            <div key={`issueActivity_assign${e}_${i}`} className="line-through">
              {e.username}
            </div>
          );
        })}
      </div>
    );
  }
  if (activity.prevState === -1) {
    return (
      <div className="issueActivity text-16 pl-10 mt-3 mb-3 flex text-center items-center">
        <span className="">
          <div className="issueActivity_profileIcon flex  ">
            <img src={PROFILE_IMAGE} className="" />
          </div>
        </span>
        <div className="hl "></div>
        <div className="issueActivity_statusIcon flex ">
          <img src={OPEN_BOX} className="" />
        </div>
        <p className="flex pl-5">
          {activity.username} start issue with {type[activity.type - 1]}{" "}
          {typeValue[activity.type - 1][activity.nextState]}
          {activity.create_time}
        </p>
      </div>
    );
  }
  return (
    <div className="issueActivity text-16 mt-3 mb-3">
      {activity.username} changed {type[activity.type - 1]} from{" "}
      {typeValue[activity.type - 1][activity.prevState]} to{" "}
      {typeValue[activity.type - 1][activity.nextState]}
    </div>
  );
};

export default IssueActivity;
