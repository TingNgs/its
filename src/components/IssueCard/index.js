import React from "react";

import { toLocalTime } from "../../utils/generalUtils";

import "./style.scss";

const IssueCard = ({
  id,
  ReportUser,
  create_time,
  description,
  isReproducible,
  name,
  priority,
  projectId,
  severity,
  state
}) => {
  return (
    <div className="IssueCard w-full">
      <div className="IssueCard_title text-20">{name}</div>
      <div>
        state : {state}, priority:{priority}, severity:{severity}
      </div>
      <div>create at : {toLocalTime(create_time)}</div>
    </div>
  );
};

export default IssueCard;
