import api from "../api";
import { apihost } from "../../configConst";

const ProfileAPI = {};

ProfileAPI.getMyProfile = () => {
  const url = `${apihost}/profile/me?sessionId=${localStorage.getItem(
    "sessionId"
  )}`;
  return api.fire({
    url,
    method: "GET"
  });
};

export default ProfileAPI;
