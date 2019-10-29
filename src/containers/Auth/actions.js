import { AUTH_SUCCESS } from "./constants";

export const authSuccess = ({ username }) => dispatch => {
  const data = {
    username
  };
  console.log(data);
  dispatch({ type: AUTH_SUCCESS, payload: data });
};
