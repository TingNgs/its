import React from "react";
import { CONST } from "../constants";
import { toLocalTime } from "../../../utils/generalUtils";

const Detail = ({ projectDetail }) => {
  const {
    create_time,
    description,
    finish_issue_count,
    isPrivate,
    issue_count,
    member_count,
    name,
    owner,
    tag_count
  } = projectDetail;
  return (
    <>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.owner}
        {owner}
      </div>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.description}
        {description}
      </div>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.createAT}
        {toLocalTime(create_time)}
      </div>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.activeIssue}
        {issue_count}
      </div>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.closeIssue}
        {finish_issue_count}
      </div>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.memberCount}
        {member_count}
      </div>
      <div className="projectDetail_subtitle text-18 font-semibold flex">
        {CONST.TagCount}
        {tag_count}
      </div>
    </>
  );
};

export default Detail;
