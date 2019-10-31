import { AUTH_SUCCESS, AUTH_LOGOUT } from "./constants";

export const authSuccess = data => dispatch => {
  const payload = {
    username: data.username
  };
  if (data.sessionId) localStorage.setItem("sessionId", data.sessionId);
  if (data.profileId === 0 || data.profileId)
    localStorage.setItem("profileId", data.profileId);
  dispatch({ type: AUTH_SUCCESS, payload });
};

export const logout = () => dispatch => {
  localStorage.removeItem("sessionId");
  localStorage.removeItem("profileId");
  dispatch({ type: AUTH_LOGOUT });
};
