import api from "../api";
import { apihost } from "../../configConst";

const ProjectApi = {};

ProjectApi.addNewProject = query => {
  const url = `${
    apihost[process.env.REACT_APP_ENV]
  }/project?sessionId=${localStorage.getItem("sessionId")}`;
  return api.fire({
    url,
    method: "POST",
    data: query
  });
};

export default ProjectApi;
