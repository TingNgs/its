import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthAPI from "../../utils/api/apifetcher/auth";
import * as actions from "./actions";

const Tasks = props => {
  const tasks = useSelector(state => state.TasksReducer.tasks);
  const dispatch = useDispatch();
  console.log(tasks);
  useEffect(() => {
    actions.fetchTasks()(dispatch);
    AuthAPI.login({ test: "" }).then(res => console.log(res));
  }, []);
  return <div>test tasks reducer : {tasks} </div>;
};

export default Tasks;
