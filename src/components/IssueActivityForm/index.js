import React, { useState } from "react";
import FormInput from "../FormInput";
import { ISSUE_FORM_CONST } from "./contents";
import {
  inputType,
  STATE_OPTION,
  SEVERITY_OPTION,
  PRIORITY_OPTION
} from "../../utils/configConst";

const IssueActivityForm = ({ issueDetail }) => {
  const [comment, setComment] = useState("");
  const [isReproducible, setIsReproducible] = useState(
    issueDetail.isReproducible ? 0 : 1
  );
  const [state, setState] = useState(issueDetail.state);
  const [severity, setSeverity] = useState(issueDetail.severity);
  const [priority, setPriority] = useState(issueDetail.priority);

  const [isShowReproducible, setShowReproducible] = useState(false);
  const [isShowState, setShowState] = useState(false);
  const [isShowSeverity, setShowSeverity] = useState(false);
  const [isShowPriority, setShowPriority] = useState(false);
  const handleInput = e => {
    const { name } = e.target;
    const { value } = e.target;

    switch (name) {
      case ISSUE_FORM_CONST.comment:
        setComment(value);
        break;
      case ISSUE_FORM_CONST.state:
        setState(value);
        break;
      case ISSUE_FORM_CONST.severity:
        setSeverity(value);
        break;
      case ISSUE_FORM_CONST.priority:
        setPriority(value);
        break;
      case ISSUE_FORM_CONST.isReproducible:
        setIsReproducible(value);
        break;
      default:
        break;
    }
  };
  const inputList = [
    {
      name: ISSUE_FORM_CONST.comment,
      value: comment,
      placeholder: ISSUE_FORM_CONST.comment_placeholder,
      title: ISSUE_FORM_CONST.comment_placeholder,
      inputType: inputType.textarea
    }
  ];

  if (isShowReproducible)
    inputList.unshift({
      name: ISSUE_FORM_CONST.isReproducible,
      title: ISSUE_FORM_CONST.isReproducible_title,
      value: isReproducible,
      option: [ISSUE_FORM_CONST.yes, ISSUE_FORM_CONST.no],
      inputType: inputType.radio
    });
  if (isShowSeverity)
    inputList.unshift({
      name: ISSUE_FORM_CONST.severity,
      title: ISSUE_FORM_CONST.severity_title,
      value: severity,
      option: SEVERITY_OPTION,
      inputType: inputType.select
    });
  if (isShowPriority)
    inputList.unshift({
      name: ISSUE_FORM_CONST.priority,
      title: ISSUE_FORM_CONST.priority_title,
      value: priority,
      option: PRIORITY_OPTION,
      inputType: inputType.select
    });
  if (isShowState)
    inputList.unshift({
      name: ISSUE_FORM_CONST.state,
      title: ISSUE_FORM_CONST.state_title,
      value: state,
      option: STATE_OPTION,
      inputType: inputType.select
    });

  const renderCheckBox = (
    isChecked,
    setFunction,
    name,
    setInitValue,
    initValue
  ) => {
    return (
      <div className="issueActivityForm_checkBox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            if (isChecked) setInitValue(initValue);

            setFunction(!isChecked);
          }}
        />
        {name}
      </div>
    );
  };

  const renderCheckList = () => {
    return (
      <div className="issueActivityForm_checkList flex">
        {renderCheckBox(
          isShowState,
          setShowState,
          ISSUE_FORM_CONST.state_title,
          setState,
          issueDetail.state
        )}
        {renderCheckBox(
          isShowPriority,
          setShowPriority,
          ISSUE_FORM_CONST.priority_title,
          setPriority,
          issueDetail.priority
        )}
        {renderCheckBox(
          isShowSeverity,
          setShowSeverity,
          ISSUE_FORM_CONST.severity_title,
          setSeverity,
          issueDetail.severity
        )}
        {renderCheckBox(
          isShowReproducible,
          setShowReproducible,
          ISSUE_FORM_CONST.isReproducible_title,
          setIsReproducible,
          issueDetail.isReproducible ? 0 : 1
        )}
      </div>
    );
  };

  return (
    <div className="issueActivityForm">
      {renderCheckList()}
      <FormInput inputList={inputList} handleInput={handleInput} />
      <div className="main_btn btn-active btn-sm">Submit</div>
    </div>
  );
};

export default IssueActivityForm;