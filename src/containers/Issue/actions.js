import { FETCH_ISSUE_SUCCESS } from "./constants";

export const fetchIssue = () => dispatch => {
  dispatch({ type: FETCH_ISSUE_SUCCESS, payload: [456] });
};
