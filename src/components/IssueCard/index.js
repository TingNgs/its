import React from 'react';
import { Link } from 'react-router-dom';
import { toLocalTime } from '../../utils/generalUtils';
import { ISSUE_DETAIL_LINK } from '../../utils/pathConst';
import './style.scss';
import {
    STATE_OPTION,
    SEVERITY_OPTION,
    PRIORITY_OPTION
} from '../../utils/configConst';
const IssueCard = ({ issue }) => {
    const {
        id,
        reportUser,
        create_time,
        description,
        isReproducible,
        name,
        priority,
        projectId,
        severity,
        state,
        tags
    } = issue;

    return (
        <Link to={ISSUE_DETAIL_LINK(id)}>
            <div className="IssueCard w-full">
                <div className="IssueCard_title text-20">{name}</div>
                <div>
                    state : {STATE_OPTION[state]}, priority:
                    {PRIORITY_OPTION[priority]}, severity:
                    {SEVERITY_OPTION[severity]}
                </div>
                <div>create at : {toLocalTime(create_time)}</div>
                <div>Tags : {tags.map(e => `${e} `)}</div>
            </div>
        </Link>
    );
};

export default IssueCard;
