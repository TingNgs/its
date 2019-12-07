import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import Layout from "../../components/Layout";
import AddButton from "../../components/AddButton";
import PopUp from "../../components/PopUp";
import ProjectForm from "../../components/ProjectForm";

import * as actions from "./actions";
import "./style.scss";

const Projects = () => {
  const { getState } = useStore();
  const dispatch = useDispatch();
  const {
    projectList,
    isAddingProject,
    showNewProjectForm,
    newProjectErrorMsg
  } = useSelector(state => state.ProjectsReducer);

  useEffect(() => {
    actions.fetchProjects()(dispatch);
  }, []);

  const toggleNewProjectForm = () => {
    actions.toggleNewProjectForm()(dispatch, getState);
  };
  console.log(projectList);
  const handleSubmit = query => {
    if (!isAddingProject) actions.addNewProject(query)(dispatch);
  };

  return (
    <Layout isLogined={true}>
      <div className="project_container">
        <AddButton action={toggleNewProjectForm} wording="New Project" />
        {projectList.map(e => (
          <div key={e.id}>name: {e.name}</div>
        ))}
      </div>
      {showNewProjectForm ? (
        <PopUp>
          <ProjectForm
            handleCancel={isAddingProject ? null : toggleNewProjectForm}
            handleSubmit={handleSubmit}
            errorMsg={newProjectErrorMsg}
          />
        </PopUp>
      ) : null}
    </Layout>
  );
};

export default Projects;
