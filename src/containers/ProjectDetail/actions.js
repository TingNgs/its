import ProjectApi from "../../utils/api/apifetcher/project";
import IssueApi from "../../utils/api/apifetcher/issue";

import {
  FETCH_PROJECT_DETAIL,
  FETCH_PROJECT_DETAIL_SUCCESS,
  FETCH_PROJECT_DETAIL_FAIL,
  TOGGLE_NEW_ISSUE_FORM,
  ADD_NEW_ISSUE,
  ADD_NEW_ISSUE_SUCCESS,
  ADD_NEW_ISSUE_FAIL
} from "./constants";

import { red_alert } from "../../utils/configConst";

export const fetchProjectDetial = (user, project) => dispatch => {
  dispatch({ type: FETCH_PROJECT_DETAIL });
  ProjectApi.getProjectDetail({ user, project }).then(
    res => {
      dispatch({ type: FETCH_PROJECT_DETAIL_SUCCESS, payload: res.data });
    },
    rej => {
      const { response } = rej;
      const { status } = response;
      const errMsg =
        status === 404 ? red_alert.NOT_FOUND : red_alert.TRY_AGAIN_LATHER;
      dispatch({ type: FETCH_PROJECT_DETAIL_FAIL, payload: errMsg });
    }
  );
};

export const toogleNewIssueForm = () => dispatch => {
  dispatch({ type: TOGGLE_NEW_ISSUE_FORM });
};

export const addNewIssue = query => dispatch => {
  dispatch({ type: ADD_NEW_ISSUE });
  IssueApi.addNewIssue(query).then(
    res => {
      dispatch({ type: ADD_NEW_ISSUE_SUCCESS, payload: res.data });
    },
    rej => {
      dispatch({
        type: ADD_NEW_ISSUE_FAIL,
        payload: red_alert.TRY_AGAIN_LATHER
      });
    }
  );
};
