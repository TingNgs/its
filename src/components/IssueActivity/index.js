import React from 'react';

import {
    STATE_OPTION,
    SEVERITY_OPTION,
    PRIORITY_OPTION
} from '../../utils/configConst';

const IssueActivity = ({ activity }) => {
    console.log('Here is a issue activity', activity);

    const type = ['state', 'severity', 'priority', 'Reproducible'];
    const typeValue = [
        STATE_OPTION,
        SEVERITY_OPTION,
        PRIORITY_OPTION,
        ['Yes', 'No']
    ];

    if (activity.type === 0) {
        return (
            <div className="issueActivity">
                {activity.username} Added a comment
                {activity.content}
            </div>
        );
    }
    if (activity.prevState === -1) {
        return (
            <div className="issueActivity">
                {activity.username} start issue with {type[activity.type - 1]}{' '}
                {typeValue[activity.type - 1][activity.nextState]}
            </div>
        );
    }
    return (
        <div className="issueActivity">
            {activity.username} changed {type[activity.type - 1]} from
            {typeValue[activity.type - 1][activity.prevState]} to
            {typeValue[activity.type - 1][activity.nextState]}
        </div>
    );
};

export default IssueActivity;
