import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../Layout";
import IssueAPI from "../../utils/api/apifetcher/issue";

import LoadingSpinner from "../LoadingSpinner";
import IssueActivity from "../IssueActivity";

import "./style.scss";

const IssueDetail = () => {
  const { issueId } = useParams();
  const [issueDetail, setIssueDetail] = useState(null);
  const [fetchingError, setFetchingError] = useState(null);

  useEffect(() => {
    if (issueDetail != null) setIssueDetail(null);
    IssueAPI.getIssueByIssueId(issueId).then(
      res => {
        setIssueDetail(res.data);
      },
      rej => {
        console.log(rej);
      }
    );
  }, [issueId]);
  console.log(issueDetail);

  const renderIssueDetail = () => {
    return (
      <div className="issueDetail">
        <div>:{issueDetail.name}</div>
        <div>{issueDetail.description}</div>
        <div>{issueDetail.isReproducible}</div>
        <div>{issueDetail.priority}</div>
        <div>{issueDetail.projectId}</div>
        <div>{issueDetail.description}</div>
        <div>{issueDetail.name}</div>
        <div>{issueDetail.description}</div>
      </div>
    );
  };

  const renderIssueActivity = () => {
    const { activity } = issueDetail;
    return (
      <div className="issueDetail_activity">
        {activity.map((activity, i) => (
          <IssueActivity
            key={`issue_activity${i}${activity.id}`}
            activity={activity}
          />
        ))}
      </div>
    );
  };

  return (
    <Layout isLogined={true}>
      <div className="issueDetail_container">
        {issueDetail ? (
          <React.Fragment>
            {renderIssueDetail()}
            {renderIssueActivity()}
          </React.Fragment>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </Layout>
  );
};

export default IssueDetail;
