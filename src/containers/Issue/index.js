import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import * as actions from "./actions";

import LoadingSpinner from "../../components/LoadingSpinner";
import IssueCard from "../../components/IssueCard";

import { HIT_BOTTOM } from "../../utils/configConst";
import { TITLE } from "./constants";

import './style.scss';

const Issue = () => {
  const {
    issueList,
    isFetchingIssue,
    isIssueFetchBottom,
    issueTimestamp } = useSelector(state => state.IssueReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!issueTimestamp) actions.fetchIssue(null)(dispatch);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + Math.ceil(window.scrollY) >=
      document.body.offsetHeight &&
      !isFetchingIssue &&
      !isIssueFetchBottom
    ) {
      actions.fetchIssue(issueTimestamp)(dispatch);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Layout isLogined={true}>
      <div className="issue_container w-full">
        <div className="issue_header w-full flex justify-between items-center">
          <p className=" text-20 font-semibold">{TITLE}</p>
        </div>
        <div className="issue_list w-full">
          {issueList.map((e, i) => {
            return <div key={`issueList${i}${e.id}`}><IssueCard
              key={`pit${e.id}`}
              id={e.id}
              reportUser={e.reportUser}
              create_time={e.create_time}
              description={e.description}
              isReproducible={e.isReproducible}
              name={e.name}
              priority={e.priority}
              projectId={e.projectId}
              severity={e.severity}
              state={e.state}
            /></div>
          })}
          {isFetchingIssue ? <LoadingSpinner /> : null}
        </div>
      </div>
    </Layout>
  );
};

export default Issue;
