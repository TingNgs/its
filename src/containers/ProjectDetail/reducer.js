import {
  FETCH_PROJECT_DETAIL,
  FETCH_PROJECT_DETAIL_SUCCESS,
  FETCH_PROJECT_DETAIL_FAIL,
  TOGGLE_NEW_ISSUE_FORM,
  ADD_NEW_ISSUE,
  ADD_NEW_ISSUE_SUCCESS,
  ADD_NEW_ISSUE_FAIL,
  FETCH_PROJECT_ISSUE,
  FETCH_PROJECT_ISSUE_SUCCESS,
  FETCH_PROJECT_ISSUE_FAIL,
  FETCH_PROJECT_ISSUE_BOTTOM,
  FETCH_PROJECT_TAG,
  FETCH_PROJECT_TAG_SUCCESS,
  FETCH_PROJECT_TAG_FAIL,
  ADD_PROJECT_MEMBER,
  ADD_PROJECT_MEMBER_SUCCESS,
  ADD_PROJECT_MEMBER_FAIL,
  FETCH_PROJECT_MEMBER,
  FETCH_PROJECT_MEMBER_SUCCESS,
  FETCH_PROJECT_MEMBER_FAIL,
  FETCH_PROJECT_MEMBER_BOTTOM
} from "./constants";

const initialState = {
  isFetchingProjectDetail: false,
  fetchProjectDetailError: null,
  projectDetail: null,

  projectIssueList: [],
  isFetchingProjectIssue: false,
  isProjectIssueFetchBottom: false,
  projectIssueTimestamp: null,

  projectTagList: [],
  isFetchingProjectTag: false,

  projectMemberList: [],
  isFetchingProjectMember: false,
  isProjectMemberFetchBottom: false,
  projectMemberTimestamp: null,

  isAddingMember: false,
  addMemberErrMsg: null,

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
        ...initialState,
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
      return {
        ...state,
        isAddingIssue: false,
        newIssueErrorMsg: payload
      };
    case FETCH_PROJECT_ISSUE:
      return { ...state, isFetchingProjectIssue: true };
    case FETCH_PROJECT_ISSUE_SUCCESS:
      return {
        ...state,
        isFetchingProjectIssue: false,
        projectIssueList: state.projectIssueTimestamp
          ? state.projectIssueList.concat(payload)
          : payload,
        projectIssueTimestamp: payload[payload.length - 1].create_time
      };
    case FETCH_PROJECT_ISSUE_FAIL:
      return {
        ...state,
        isFetchingProjectIssue: false,
        fetchProjectDetailError: payload
      };
    case FETCH_PROJECT_ISSUE_BOTTOM:
      return {
        ...state,
        isProjectIssueFetchBottom: true,
        projectIssueTimestamp: payload.length
          ? payload[payload.length - 1].create_time
          : null,
        projectIssueList: state.projectIssueTimestamp
          ? state.projectIssueList.concat(payload)
          : payload,
        isFetchingProjectIssue: false
      };
    case FETCH_PROJECT_DETAIL:
      return {
        ...initialState,
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

    case FETCH_PROJECT_DETAIL:
      return {
        ...initialState,
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

    case FETCH_PROJECT_TAG:
      return {
        ...state,
        isFetchingProjectTag: true,
        fetchProjectDetailError: null
      };
    case FETCH_PROJECT_TAG_SUCCESS:
      return {
        ...state,
        isFetchingProjectTag: false,
        projectTagList: payload
      };
    case FETCH_PROJECT_TAG_FAIL:
      return {
        ...state,
        isFetchingProjectTag: false,
        fetchProjectDetailError: payload
      };
    case ADD_PROJECT_MEMBER:
      return { ...state, isAddingIssue: true, addMemberErrMsg: null };
    case ADD_PROJECT_MEMBER_SUCCESS:
      return {
        ...state,
        isAddingIssue: false,
        projectMemberList: [payload].concat(state.projectMemberList)
      };
    case ADD_PROJECT_MEMBER_FAIL:
      return {
        ...state,
        isAddingIssue: false,
        addMemberErrMsg: payload
      };

    case FETCH_PROJECT_MEMBER:
      return {
        ...state,
        isFetchingProjectMember: true,
        fetchProjectDetailError: null
      };
    case FETCH_PROJECT_MEMBER_SUCCESS:
      return {
        ...state,
        isFetchingProjectMember: false,
        projectMemberList: state.projectMemberTimestamp
          ? state.projectMemberList.concat(payload)
          : payload,
        projectMemberTimestamp: payload[payload.length - 1].join_time
      };
    case FETCH_PROJECT_MEMBER_BOTTOM:
      console.log(payload);
      return {
        ...state,
        isProjectMemberFetchBottom: true,
        projectMemberTimestamp: payload.length
          ? payload[payload.length - 1].join_time
          : null,
        projectMemberList: state.projectMemberTimestamp
          ? state.projectMemberList.concat(payload)
          : payload,
        isFetchingProjectMember: false
      };
    case FETCH_PROJECT_MEMBER_FAIL:
      return {
        ...state,
        isFetchingProjectMember: false,
        fetchProjectDetailError: payload
      };
    default:
      return state;
  }
}
