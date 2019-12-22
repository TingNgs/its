import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Layout from "../Layout";
import CardLayout from "../CardLayout";
import IssueAPI from "../../utils/api/apifetcher/issue";

import LoadingSpinner from "../LoadingSpinner";
import IssueActivity from "../IssueActivity";
import IssueActivityForm from "../IssueActivityForm";
import EditIssueForm from "../EditIssueForm";
import PopUp from "../PopUp";

import { red_alert } from "../../utils/configConst";
import "./style.scss";
import MARK_ICON from "../../utils/image/exclamation-mark.svg";

import {
  STATE_OPTION,
  SEVERITY_OPTION,
  PRIORITY_OPTION
} from "../../utils/configConst";

const IssueDetail = () => {
  const { issueId } = useParams();
  const [issueDetail, setIssueDetail] = useState(null);
  const [fetchingError, setFetchingError] = useState(null);

  const [showEditIssue, setEditIssue] = useState(false);
  const [editErrorMsg, setErrorMsg] = useState(null);

  const { username } = useSelector(state => state.AuthReducer);

  useEffect(() => {
    if (issueDetail != null) setIssueDetail(null);
    IssueAPI.getIssueByIssueId(issueId).then(
      res => {
        setIssueDetail(res.data);
        console.log("Here is the issue detail", res.data);
      },
      rej => {
        const { status } = rej.response;
        if (status === 404) setFetchingError(red_alert.NOT_FOUND);
        else setFetchingError(red_alert.TRY_AGAIN_LATER);
      }
    );
  }, [issueId]);

  const handleAddIssueActivity = query => {
    IssueAPI.addIssueActivity(query).then(
      res => {
        setIssueDetail(res.data);
        console.log("Here is the issue detail", res.data);
      },
      rej => {
        const { status } = rej.response;
        if (status === 404) setFetchingError(red_alert.NOT_FOUND);
        else setFetchingError(red_alert.TRY_AGAIN_LATER);
      }
    );
  };

  const handleEditSubmit = query => {
    IssueAPI.editIssue(query).then(
      res => {
        setIssueDetail(res.data);
        setEditIssue(false);
        setErrorMsg(null);
        console.log("Here is the issue detail", res.data);
      },
      rej => {
        setErrorMsg(red_alert.TRY_AGAIN_LATER);
      }
    );
  };

  const handleEditComment = (query, handleCancel) => {
    query.name = issueDetail.name;
    IssueAPI.editIssueActivity(query).then(
      res => {
        setIssueDetail(res.data);
        console.log("Here is the issue detail", res.data);
        handleCancel();
      },
      rej => {
        setFetchingError(red_alert.TRY_AGAIN_LATER);
      }
    );
  };

  const renderIssueDetail = () => {
    return (
      <CardLayout>
        <div className="issueDetail">
          <div className="flex justify-between">
            <div className="flex">
              <img src={MARK_ICON} className="issueDetail_icon flex " />
              <div className="flex font-bold">{issueDetail.name}</div>
            </div>
            {issueDetail.reportUser === username ? (
              <div
                className="main_btn btn-active"
                onClick={() => {
                  setEditIssue(!showEditIssue);
                }}
              >
                Edit Issue
              </div>
            ) : null}
          </div>
          <div className="hl" />
          <div>
            <div className="font-bold">Description</div>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: issueDetail.description
              }}
            />
          </div>
          <div className="hl" />
          <div className="issueDetail_state">
            <div>
              Issue state: <b>{STATE_OPTION[issueDetail.state]}</b>
            </div>
            <div>
              Issue severity: <b>{PRIORITY_OPTION[issueDetail.priority]}</b>
            </div>
            <div>
              Issue priority: <b>{SEVERITY_OPTION[issueDetail.projectId]}</b>
            </div>
          </div>
        </div>
      </CardLayout>
    );
  };

  const renderIssueActivity = () => {
    const { activity } = issueDetail;
    return (
      <div className="issueDetail_activity ">
        {activity.map((activity, i) => (
          <IssueActivity
            key={`issue_activity${i}${activity.id}`}
            activity={activity}
            handleEditComment={handleEditComment}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="issueDetail_container w-full bg-gray-200">
      {fetchingError ? (
        fetchingError
      ) : issueDetail ? (
        <React.Fragment>
          {renderIssueDetail()}
          {renderIssueActivity()}
          <CardLayout>
            <IssueActivityForm
              issueDetail={issueDetail}
              handleSubmit={handleAddIssueActivity}
            />
          </CardLayout>
        </React.Fragment>
      ) : (
        <LoadingSpinner />
      )}
      {showEditIssue ? (
        <PopUp>
          <EditIssueForm
            issueDetail={issueDetail}
            errorMsg={editErrorMsg}
            handleSubmit={handleEditSubmit}
            handleCancel={() => {
              setErrorMsg(null);
              setEditIssue(false);
            }}
          />
        </PopUp>
      ) : null}
    </div>
  );
};

export default IssueDetail;
