import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import Layout from "../../components/Layout";
import AddButton from "../../components/AddButton";
import PopUp from "../../components/PopUp";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProjectForm from "../../components/ProjectForm";
import ProjectCard from "../../components/ProjectCard";

import * as actions from "./actions";
import "./style.scss";

const Projects = () => {
  const { getState } = useStore();
  const dispatch = useDispatch();
  const {
    projectList,
    projectTimestamp,
    isFetchingProject,
    isProjectFetchBottom,

    isAddingProject,
    showNewProjectForm,
    newProjectErrorMsg
  } = useSelector(state => state.ProjectsReducer);

  useEffect(() => {
    if (projectTimestamp === null) actions.fetchProjects()(dispatch, getState);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + Math.ceil(window.scrollY) >=
        document.body.offsetHeight &&
      !isFetchingProject &&
      !isProjectFetchBottom
    ) {
      actions.fetchProjects()(dispatch, getState);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleNewProjectForm = () => {
    actions.toggleNewProjectForm()(dispatch, getState);
  };

  const handleSubmit = query => {
    if (!isAddingProject) actions.addNewProject(query)(dispatch);
  };

  return (
    <Layout isLogined={true}>
      <div className="project_container">
        <AddButton action={toggleNewProjectForm} wording="New Project" />
        <div className="project_list">
          {projectList.map(e => {
            return (
              <ProjectCard
                key={`$projectCard${e.id}`}
                id={e.id}
                name={e.name}
                description={e.description}
                create_time={e.create_time}
                isPrivate={e.isPrivate}
                owner={e.owner}
              />
            );
          })}
          {isFetchingProject ? <LoadingSpinner /> : null}
        </div>
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
