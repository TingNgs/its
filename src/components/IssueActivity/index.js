import React from 'react';

import PROFILE_IMAGE from '../../utils/image/user_icon.svg';
import OPEN_BOX from '../../utils/image/open-box.svg';
import {
    STATE_OPTION,
    SEVERITY_OPTION,
    PRIORITY_OPTION
} from '../../utils/configConst';
import './style.scss';
const IssueActivity = ({ activity }) => {
    const type = ['state', 'severity', 'priority', 'Reproducible'];
    const typeValue = [
        STATE_OPTION,
        SEVERITY_OPTION,
        PRIORITY_OPTION,
        ['Yes', 'No']
    ];

    if (activity.type === 0) {
        return (
            <div className="issueActivity text-16 mt-3 mb-3">
                {activity.username} commented:{' '}
                <div dangerouslySetInnerHTML={{ __html: activity.content }} />
            </div>
        );
    }
    if (activity.type === 5) {
        return (
            <div className="issueActivity text-16 mt-3 mb-3">
                {activity.username} assigned:
                {activity.assignList.map((e, i) => {
                    return e.isAdd ? (
                        <div key={`issueActivity_assign${e}_${i}`}>
                            {e.username}
                        </div>
                    ) : (
                        <div
                            key={`issueActivity_assign${e}_${i}`}
                            className="line-through"
                        >
                            {e.username}
                        </div>
                    );
                })}
            </div>
        );
    }
    if (activity.prevState === -1) {
        return (
            <div className="issueActivity text-16 pl-10 mt-3 mb-3 flex text-center items-center">
                <span className="">
                    <div className="issueActivity_profileIcon flex  ">
                        <img src={PROFILE_IMAGE} className="" />
                    </div>
                </span>
                <div className="hl "></div>
                <div className="issueActivity_statusIcon flex ">
                    <img src={OPEN_BOX} className="" />
                </div>
                <p className="flex pl-5">
                    {activity.username} start issue with{' '}
                    {type[activity.type - 1]}{' '}
                    {typeValue[activity.type - 1][activity.nextState]}
                    {activity.create_time}
                </p>
            </div>
        );
    }
    return (
        <div className="issueActivity text-16 mt-3 mb-3">
            {activity.username} changed {type[activity.type - 1]} from{' '}
            {typeValue[activity.type - 1][activity.prevState]} to{' '}
            {typeValue[activity.type - 1][activity.nextState]}
        </div>
    );
};

export default IssueActivity;
