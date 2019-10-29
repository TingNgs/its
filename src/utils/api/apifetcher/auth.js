import api from "../api";
import { apihost } from "../../configConst";

const AuthAPI = {};

AuthAPI.register = query => {
  const url = `${apihost}/session`;
  return api.fire({
    url,
    method: "POST",
    data: query
  });
};

AuthAPI.login = query => {
  const url = `${apihost}/session/login`;
  return api.fire({
    url,
    method: "POST",
    data: query
  });
};

AuthAPI.verifyEmail = email => {
  const url = `${apihost}/session/verify/email?email=${email}`;
  return api.fire({
    url,
    method: "GET"
  });
};

AuthAPI.verifyUsername = username => {
  const url = `${apihost}/session/verify/username?username=${username}`;
  return api.fire({
    url,
    method: "GET"
  });
};

export default AuthAPI;
