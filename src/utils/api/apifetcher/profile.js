import api from "../api";
import { apihost } from "../../configConst";

const ProfileAPI = {};

ProfileAPI.getMyProfile = () => {
  const url = `${
    apihost[process.env.REACT_APP_ENV]
  }/profile/me?sessionId=${localStorage.getItem(
    "sessionId"
  )}&profileId=${localStorage.getItem("profileId")}`;
  return api.fire({
    url,
    method: "GET"
  });
};

ProfileAPI.getProfileById = profileId => {
  const url = `${
    apihost[process.env.REACT_APP_ENV]
  }/profile?profileId=${profileId}`;
  return api.fire({
    url,
    method: "GET"
  });
};

ProfileAPI.updateUser = query => {
  const url = `${
    apihost[process.env.REACT_APP_ENV]
  }/profile/update?sessionId=${localStorage.getItem("sessionId")}`;
  return api.fire({
    url,
    method: "PUT",
    data: query
  });
};

export default ProfileAPI;
