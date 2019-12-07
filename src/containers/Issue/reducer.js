import { FETCH_ISSUE_SUCCESS } from "./constants";

const initialState = {
  issueList: []
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_ISSUE_SUCCESS:
      return {
        ...state,
        issueList: state.issueList.concat(payload)
      };
    default:
      return state;
  }
}
