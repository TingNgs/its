import React from 'react';

import { Link } from 'react-router-dom';
import PRIVATE_ICON from '../../utils/image/locked_project.svg';
import PUBLIC_ICON from '../../utils/image/project.svg';

import { PROJECT_DETIAL_LINK } from '../../utils/pathConst';
import { toLocalTime } from '../../utils/generalUtils';
import { CONST } from './constant';
import './style.scss';

const ProjectCard = ({
    id,
    name,
    description,
    create_time,
    isPrivate,
    owner
}) => {
    return (
        <Link to={PROJECT_DETIAL_LINK(owner, name)}>
            <div className="projectCard w-full">
                <div className="projectCard_title text-20 font-semibold flex">
                    <img
                        className="projectCard_icon"
                        src={isPrivate ? PRIVATE_ICON : PUBLIC_ICON}
                    />
                    {`${CONST.title}${owner}/${name}`}
                </div>
                <div className="projectCard_createAt text-16">
                    {`${CONST.createAT}${toLocalTime(create_time)}`}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
