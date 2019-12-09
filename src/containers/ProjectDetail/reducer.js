import {
  FETCH_PROJECT_DETAIL,
  FETCH_PROJECT_DETAIL_SUCCESS
} from "./constants";

const initialState = {
  isFetchingProjectDetail: false,
  projectDetail: null
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_PROJECT_DETAIL:
      return { ...state, isFetchingProjectDetail: true };
    case FETCH_PROJECT_DETAIL_SUCCESS:
      return {
        ...state,
        isFetchingProjectDetail: false,
        projectDetail: payload
      };
    default:
      return state;
  }
}
