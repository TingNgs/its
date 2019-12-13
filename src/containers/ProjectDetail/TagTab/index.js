import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';

import IssueCard from '../../../components/IssueCard';
import LoadingSpinner from '../../../components/LoadingSpinner';

import { CONST } from '../constants';
import { HIT_BOTTOM } from '../../../utils/configConst';
import * as actions from '../actions';

const TagTab = ({}) => {
    const dispatch = useDispatch();
    const { projectDetail, projectTagList, isFetchingProjectTag } = useSelector(
        state => state.ProjectDetailReducer
    );

    useEffect(() => {
        actions.fetchProjectTag(projectDetail.id)(dispatch);
    }, []);

    return (
        <div className="TagTab_container w-full">
            <div className="TagTab_title text-20 font-semibold">
                {CONST.tagTab_title}
            </div>
            <div className="TagTab_Tags_container">
                {projectTagList.map(e => (
                    <div key={`TagTab_Tag${e}`} className="TagTab_Tag">
                        {e}
                    </div>
                ))}
                {isFetchingProjectTag ? <LoadingSpinner /> : null}
            </div>
        </div>
    );
};

export default TagTab;
