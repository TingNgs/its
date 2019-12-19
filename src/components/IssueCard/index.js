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
                <div className="IssueCard_title text-20 flex justify-between">
                    <div className="font-semibold text-20 flex justify-start">
                        {name}
                    </div>
                    <div className="text-14 flex justify-end text-gray-800">
                        {toLocalTime(create_time)}
                    </div>
                </div>
                <div className="text-14">
                    state : {STATE_OPTION[state]}, priority:
                    {PRIORITY_OPTION[priority]}, severity:
                    {SEVERITY_OPTION[severity]}
                </div>

                <div>
                    {tags.map(e => (
                        <div
                            key={`issueCardtag${e}${id}`}
                            className="IssueCard_Tags_container bg-green-200"
                        >
                            {e}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default IssueCard;
