import React, { useState, useEffect } from "react";
import FormInput from "../FormInput";
import { ISSUE_FORM_CONST } from "./contents";
import {
  inputType,
  STATE_OPTION,
  SEVERITY_OPTION,
  PRIORITY_OPTION
} from "../../utils/configConst";

const IssueActivityForm = ({ issueDetail, handleSubmit }) => {
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

  const handleEditorInput = value => {
    setComment(value === "<p><br></p>" ? "" : value);
  };

  const inputList = [
    {
      name: ISSUE_FORM_CONST.comment,
      value: comment,
      placeholder: ISSUE_FORM_CONST.comment_placeholder,
      title: ISSUE_FORM_CONST.comment_placeholder,
      handleInput: handleEditorInput,
      inputType: inputType.editor
    }
  ];

  useEffect(() => {
    setComment("");
    setIsReproducible(issueDetail.isReproducible ? 0 : 1);
    setState(issueDetail.state);
    setSeverity(issueDetail.severity);
    setPriority(issueDetail.priority);
    setShowReproducible(false);
    setShowState(false);
    setShowSeverity(false);
    setShowPriority(false);
  }, [issueDetail]);

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
            setInitValue(initValue);
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
        &nbsp;
        {renderCheckBox(
          isShowPriority,
          setShowPriority,
          ISSUE_FORM_CONST.priority_title,
          setPriority,
          issueDetail.priority
        )}
        &nbsp;
        {renderCheckBox(
          isShowSeverity,
          setShowSeverity,
          ISSUE_FORM_CONST.severity_title,
          setSeverity,
          issueDetail.severity
        )}
        &nbsp;
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

  const handleFormSubmit = () => {
    if (
      isShowPriority ||
      isReproducible ||
      isShowState ||
      isShowSeverity ||
      comment.length > 0
    ) {
      const query = {
        issueId: issueDetail.id,
        state,
        severity,
        priority,
        isReproducible: isReproducible === 0,
        content: comment,
        imgUrls: [],
        fileUrls: []
      };
      handleSubmit(query);
    }
  };

  return (
    <div className="issueActivityForm">
      {renderCheckList()}
      <FormInput inputList={inputList} handleInput={handleInput} />
      <div className="main_btn btn-active btn-sm" onClick={handleFormSubmit}>
        Submit
      </div>
    </div>
  );
};

export default IssueActivityForm;
