import { AUTH_SUCCESS } from "./constants";

export const authSuccess = ({ username }) => dispatch => {
  const data = {
    username
  };
  dispatch({ type: AUTH_SUCCESS, payload: data });
};
