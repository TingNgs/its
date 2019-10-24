import { FETCH_TASKS_SUCCESS } from "./constants";

export const fetchTasks = () => dispatch => {
  dispatch({ type: FETCH_TASKS_SUCCESS, payload: [123] });
};
