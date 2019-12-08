import React from "react";

import PRIVATE_ICON from "../../utils/image/locked_project.svg";
import PUBLIC_ICON from "../../utils/image/project.svg";

import { CONST } from "./constant";
import "./style.scss";

const ProjectCard = ({
  id,
  name,
  description,
  create_time,
  isPrivate,
  owner
}) => {
  const createAt = new Date(create_time);
  return (
    <div className="projectCard w-full">
      <div className="projectCard_title text-20 font-semibold flex">
        <img
          className="projectCard_icon"
          src={isPrivate ? PRIVATE_ICON : PUBLIC_ICON}
        />
        {`${CONST.title}${owner}/${name}`}
      </div>
      <div className="projectCard_createAt text-16">
        {`${CONST.createAT}${createAt.toLocaleString()}`}
      </div>
    </div>
  );
};

export default ProjectCard;
