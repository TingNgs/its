import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";

import Layout from "../../components/Layout";
import LoadingSpinner from "../../components/LoadingSpinner";

import PRIVATE_ICON from "../../utils/image/locked_project.svg";
import PUBLIC_ICON from "../../utils/image/project.svg";

import { PROJECT_DETIAL_LINK } from "../../utils/pathConst";
import { CONST } from "./constants";
import { toLocalTime } from "../../utils/generalUtils";
import * as actions from "./actions";

import "./style.scss";

const ProjectDetail = () => {
  const { user, project } = useParams();
  const dispatch = useDispatch();
  const { isFetchingProjectDetail, projectDetail } = useSelector(
    state => state.ProjectDetailReducer
  );

  useEffect(() => {
    actions.fetchProjectDetial(user, project)(dispatch);
  }, []);
  const renderProjectDetail = () => {
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
        <div className="projectDetail_title text-20 font-semibold flex">
          {CONST.projectName}
          {name}
        </div>
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
  return (
    <Layout isLogined={true}>
      <div className="projectDetail w-full">
        {isFetchingProjectDetail || !projectDetail ? (
          <LoadingSpinner />
        ) : (
          renderProjectDetail()
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
