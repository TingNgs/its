import {
  FETCH_ISSUE,
  FETCH_ISSUE_SUCCESS,
  FETCH_ISSUE_BOTTOM,
} from "./constants";

const initialState = {
  issueList: [],
  isFetchingIssue: false,
  isIssueFetchBottom: false,
  issueTimestamp: null,
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_ISSUE:
      return { ...state, isFetchingIssue: true };
    case FETCH_ISSUE_SUCCESS:
      return {
        ...state,
        issueList: state.issueTimestamp
          ? state.issueList.concat(payload)
          : payload,
        issueTimestamp: payload[payload.length - 1].create_time,
        isFetchingIssue: false
      };
    case FETCH_ISSUE_BOTTOM:
      return {
        ...state,
        isIssueFetchBottom: true,
        isFetchingIssue: false,
        issueTimestamp: payload.length ? payload[payload.length - 1].create_time : null,
        issueList: state.issueTimestamp
          ? state.issueList.concat(payload)
          : payload
      };
    default:
      return state;
  }
}
