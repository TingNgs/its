import ProjectApi from "../../utils/api/apifetcher/project";

import {
  FETCH_PROJECT_DETAIL,
  FETCH_PROJECT_DETAIL_SUCCESS
} from "./constants";

export const fetchProjectDetial = (user, project) => dispatch => {
  dispatch({ type: FETCH_PROJECT_DETAIL });
  ProjectApi.getProjectDetail({ user, project }).then(
    res => {
      dispatch({ type: FETCH_PROJECT_DETAIL_SUCCESS, payload: res.data });
    },
    rej => {
      console.log(rej);
    }
  );
};
