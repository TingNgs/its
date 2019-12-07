import {
  FETCH_PROJECTS_SUCCESS,
  ADD_NEW_PROJECT_SUCCESS,
  ADD_NEW_PROJECT_FAIL,
  ADD_NEW_PROJECT,
  SHOW_NEW_PROJECT_FORM
} from "./constants";

const initialState = {
  projectList: [],

  showNewProjectForm: false,
  newProjectErrorMsg: null,
  isAddingProject: false
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  const { projectList } = state;
  switch (type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectList: projectList.concat(payload)
      };
    case SHOW_NEW_PROJECT_FORM:
      return {
        ...state,
        showNewProjectForm: payload,
        newProjectErrorMsg: null
      };
    case ADD_NEW_PROJECT:
      return { ...state, isAddingProject: true };
    case ADD_NEW_PROJECT_SUCCESS:
      return {
        ...state,
        isAddingProject: false,
        showNewProjectForm: false,
        projectList: [payload].concat(projectList)
      };
    case ADD_NEW_PROJECT_FAIL:
      return { ...state, isAddingProject: false, newProjectErrorMsg: payload };
    default:
      return state;
  }
}
