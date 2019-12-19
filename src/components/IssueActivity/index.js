import React from "react";

import {
  STATE_OPTION,
  SEVERITY_OPTION,
  PRIORITY_OPTION
} from "../../utils/configConst";

const IssueActivity = ({ activity }) => {
  console.log("Here is a issue activity", activity);

  const type = ["state", "severity", "priority", "Reproducible"];
  const typeValue = [
    STATE_OPTION,
    SEVERITY_OPTION,
    PRIORITY_OPTION,
    ["Yes", "No"]
  ];

  if (activity.type === 0) {
    return (
      <div className="issueActivity text-16 mt-3 mb-3">
        {activity.username} commented:{" "}
        <div dangerouslySetInnerHTML={{ __html: activity.content }} />
      </div>
    );
  }
  if (activity.type === 5) {
    return (
      <div className="issueActivity text-16 mt-3 mb-3">
        {activity.username} assigned:
        {activity.assignList.map(e => {
          return e.isAdd ? (
            <div>{e.username}</div>
          ) : (
            <div className="line-through">{e.username}</div>
          );
        })}
      </div>
    );
  }
  if (activity.prevState === -1) {
    return (
      <div className="issueActivity text-16 mt-3 mb-3">
        {activity.username} start issue with {type[activity.type - 1]}{" "}
        {typeValue[activity.type - 1][activity.nextState]}
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
