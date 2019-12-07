import {
  FETCH_PROJECTS_SUCCESS,
  ADD_NEW_PROJECT,
  ADD_NEW_PROJECT_SUCCESS,
  ADD_NEW_PROJECT_FAIL,
  SHOW_NEW_PROJECT_FORM
} from "./constants";
import ProjectApi from "../../utils/api/apifetcher/project";
import { red_alert } from "../../utils/configConst";

export const fetchProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: [] });
};

export const addNewProject = query => dispatch => {
  dispatch({ type: ADD_NEW_PROJECT });
  ProjectApi.addNewProject(query).then(
    res => {
      dispatch({ type: ADD_NEW_PROJECT_SUCCESS, payload: res.data });
    },
    rej => {
      const { response } = rej;
      const { status } = response;
      const errMsg =
        status === 409
          ? red_alert.PROJECT_NAME_REPEATED
          : red_alert.TRY_AGAIN_LATHER;

      dispatch({ type: ADD_NEW_PROJECT_FAIL, payload: errMsg });
    }
  );
};

export const toggleNewProjectForm = () => (dispatch, getState) => {
  const { showNewProjectForm } = getState().ProjectsReducer;
  dispatch({ type: SHOW_NEW_PROJECT_FORM, payload: !showNewProjectForm });
};
