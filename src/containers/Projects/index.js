import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import * as actions from "./actions";

const Projects = props => {
  const projectList = useSelector(state => state.ProjectsReducer.projectList);
  const dispatch = useDispatch();
  useEffect(() => {
    actions.fetchProjects()(dispatch);
  }, []);
  return (
    <Layout isLogined={true}>
      <div>test projects reducer : {projectList} </div>
    </Layout>
  );
};

export default Projects;
