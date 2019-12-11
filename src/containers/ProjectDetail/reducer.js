import {
  FETCH_PROJECT_DETAIL,
  FETCH_PROJECT_DETAIL_SUCCESS,
  FETCH_PROJECT_DETAIL_FAIL,
  TOGGLE_NEW_ISSUE_FORM,
  ADD_NEW_ISSUE,
  ADD_NEW_ISSUE_SUCCESS,
  ADD_NEW_ISSUE_FAIL
} from "./constants";

const initialState = {
  isFetchingProjectDetail: false,
  fetchProjectDetailError: null,
  projectDetail: null,

  projectIssueList: [],

  showNewIssueForm: false,
  newIssueErrorMsg: null,
  isAddingIssue: false
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  let projectDetail;
  switch (type) {
    case FETCH_PROJECT_DETAIL:
      return {
        ...state,
        isFetchingProjectDetail: true,
        fetchProjectDetailError: null
      };
    case FETCH_PROJECT_DETAIL_SUCCESS:
      return {
        ...state,
        isFetchingProjectDetail: false,
        projectDetail: payload
      };
    case FETCH_PROJECT_DETAIL_FAIL:
      return {
        ...state,
        isFetchingProjectDetail: false,
        fetchProjectDetailError: payload,
        projectDetail: {}
      };
    case TOGGLE_NEW_ISSUE_FORM:
      return {
        ...state,
        showNewIssueForm: !state.showNewIssueForm,
        newIssueErrorMsg: null
      };

    case ADD_NEW_ISSUE:
      return { ...state, isAddingIssue: true };
    case ADD_NEW_ISSUE_SUCCESS:
      projectDetail = { ...state.projectDetail };
      if (payload.state < 3) projectDetail.issue_count += 1;
      else projectDetail.finish_issue_count += 1;
      return {
        ...state,
        isAddingIssue: false,
        showNewIssueForm: false,
        projectIssueList: [payload].concat(state.projectIssueList),
        projectDetail
      };
    case ADD_NEW_ISSUE_FAIL:
      return { ...state, isAddingIssue: false, newIssueErrorMsg: payload };
    default:
      return state;
  }
}
