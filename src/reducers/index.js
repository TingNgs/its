import { combineReducers } from "redux";
import TasksReducer from "../containers/Tasks/reducer";
import AuthReducer from "../containers/Auth/reducer";

export default combineReducers({ TasksReducer, AuthReducer });
