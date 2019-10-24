import { FETCH_TASKS_SUCCESS } from "./constants";

const initialState = {
  tasks: []
};

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.concat(payload)
      };
    default:
      return state;
  }
}
