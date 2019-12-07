import { combineReducers } from "redux";
import ProjectsReducer from "../containers/Projects/reducer";
import IssueReducer from "../containers/Issue/reducer";
import AuthReducer from "../containers/Auth/reducer";

export default combineReducers({ ProjectsReducer, AuthReducer, IssueReducer });
