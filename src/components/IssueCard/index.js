import React from "react";

import { toLocalTime } from "../../utils/generalUtils";

import "./style.scss";

const IssueCard = ({ issue }) => {
  const {
    id,
    reportUser,
    create_time,
    description,
    isReproducible,
    name,
    priority,
    projectId,
    severity,
    state,
    tags
  } = issue;
  return (
    <div className="IssueCard w-full">
      <div className="IssueCard_title text-20">{name}</div>
      <div>
        state : {state}, priority:{priority}, severity:{severity}
      </div>
      <div>create at : {toLocalTime(create_time)}</div>
      <div>Tags : {tags.map(e => `${e} `)}</div>
    </div>
  );
};

export default IssueCard;
