import { FETCH_PROJECTS_SUCCESS } from "./constants";

const initialState = {
  projectList: []
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectList: state.projectList.concat(payload)
      };
    default:
      return state;
  }
}
