import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import * as actions from "./actions";

const Issue = () => {
  const issueList = useSelector(state => state.IssueReducer.issueList);
  const dispatch = useDispatch();
  useEffect(() => {
    actions.fetchIssue()(dispatch);
  }, []);
  return (
    <Layout isLogined={true}>
      <div>test issue reducer : {issueList} </div>
    </Layout>
  );
};

export default Issue;
