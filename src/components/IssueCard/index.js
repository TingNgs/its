import React from 'react';
import { Link } from 'react-router-dom';
import { toLocalTime } from '../../utils/generalUtils';
import { ISSUE_DETAIL_LINK } from '../../utils/pathConst';
import OPEN_ICON from '../../utils/image/exclamation-mark.svg';
import IN_PROGRESS_ICON from '../../utils/image/in_progress.svg';
import READY_TO_TEST_ICON from '../../utils/image/ready_to_test.svg';
import RESOLVED_ICON from '../../utils/image/resolved.svg';
import WONT_FIX_ICON from '../../utils/image/wont_fix.svg';
import ABANDONED_ICON from '../../utils/image/abandon.svg';
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
    console.log(STATE_OPTION[state]);
    return (
        <Link to={ISSUE_DETAIL_LINK(id)}>
            <div className="IssueCard w-full">
                <div className="IssueCard_title text-20 flex justify-between mb-3">
                    <div className="font-semibold text-20 flex justify-start items-center">
                        <img
                            className="projectCard_icon"
                            src={(function() {
                                switch (STATE_OPTION[state]) {
                                    case 'Open':
                                        return OPEN_ICON;
                                    case 'In Progress':
                                        return IN_PROGRESS_ICON;
                                    case 'Ready To Test':
                                        return READY_TO_TEST_ICON;
                                    case 'Resolved':
                                        return RESOLVED_ICON;
                                    case "Won't fix":
                                        return WONT_FIX_ICON;
                                    case 'Abandoned':
                                        return ABANDONED_ICON;
                                    default:
                                        return null;
                                }
                            })()}
                        />

                        {name}
                    </div>
                    <div className="text-14 flex justify-end text-gray-800">
                        {toLocalTime(create_time)}
                    </div>
                </div>
                <div className="flex  ">
                    <div
                        className="flex IssueCard_Tags_container bg-green-200 text-14"
                        style={{
                            'background-color':
                                STATE_OPTION[state] === 'Open'
                                    ? 'red'
                                    : STATE_OPTION[state] === 'In Progress'
                                    ? 'orange'
                                    : STATE_OPTION[state] === 'Ready To Test'
                                    ? 'yellow'
                                    : STATE_OPTION[state] === 'Resolved'
                                    ? 'green'
                                    : STATE_OPTION[state] === "Won't fix"
                                    ? 'blue'
                                    : STATE_OPTION[state] === 'Abandoned'
                                    ? 'purple'
                                    : null
                        }}
                    >
                        {STATE_OPTION[state]}
                    </div>
                    <div
                        className="flex IssueCard_Tags_container bg-green-200 text-14"
                        style={{
                            'background-color':
                                PRIORITY_OPTION[priority] === 'Wish List'
                                    ? 'red'
                                    : STATE_OPTION[state] === 'Low'
                                    ? 'orange'
                                    : STATE_OPTION[state] === 'Medium'
                                    ? 'yellow'
                                    : STATE_OPTION[state] === 'High'
                                    ? 'green'
                                    : STATE_OPTION[state] === 'Unbreak Now'
                                    ? 'blue'
                                    : null
                        }}
                    >
                        {PRIORITY_OPTION[priority]}
                    </div>
                    <div
                        className="flex IssueCard_Tags_container bg-green-200 text-14"
                        style={{
                            'background-color':
                                SEVERITY_OPTION[severity] === 'Critical'
                                    ? 'red'
                                    : STATE_OPTION[state] === 'Major'
                                    ? 'orange'
                                    : STATE_OPTION[state] === 'Moderate'
                                    ? 'yellow'
                                    : STATE_OPTION[state] === 'Minor'
                                    ? 'green'
                                    : STATE_OPTION[state] === 'Low'
                                    ? 'blue'
                                    : null
                        }}
                    >
                        {SEVERITY_OPTION[severity]}
                    </div>

                    <div>
                        {tags.map(e => (
                            <div
                                key={`issueCardtag${e}${id}`}
                                className=" flex IssueCard_Tags_container bg-green-200 text-14"
                            >
                                {e}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default IssueCard;
