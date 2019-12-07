import { FETCH_PROJECTS_SUCCESS } from "./constants";

export const fetchProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: [123] });
};
