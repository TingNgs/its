import api from "../api";
import { apihost } from "../../configConst";

const ProfileAPI = {};

ProfileAPI.getMyProfile = () => {
  const url = `${
    apihost[process.env.NODE_ENV]
  }/profile/me?sessionId=${localStorage.getItem(
    "sessionId"
  )}&profileId=${localStorage.getItem("profileId")}`;
  return api.fire({
    url,
    method: "GET"
  });
};

ProfileAPI.getProfileById = profileId => {
  const url = `${apihost[process.env.NODE_ENV]}/profile?profileId=${profileId}`;
  return api.fire({
    url,
    method: "GET"
  });
};

export default ProfileAPI;
