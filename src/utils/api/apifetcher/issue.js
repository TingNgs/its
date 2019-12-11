import api from "../api";
import { apihost } from "../../configConst";

const IssueAPI = {};

IssueAPI.addNewIssue = query => {
  const url = `${
    apihost[process.env.REACT_APP_ENV]
  }/issue?sessionId=${localStorage.getItem("sessionId")}`;
  return api.fire({
    url,
    method: "POST",
    data: query
  });
};

export default IssueAPI;
