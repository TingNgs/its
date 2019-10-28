import api from "../api";
import { apihost } from "../../configConst";

const AuthAPI = {};
AuthAPI.login = query => {
  const url = `${apihost}/session/login`;
  const data = { email: "test@mail.com" };
  return api.fire({
    url,
    method: "POST",
    data: data
  });
};
export default AuthAPI;
