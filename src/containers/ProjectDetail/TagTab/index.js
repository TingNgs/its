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
    const {
        projectDetail,
        projectTagList,
        isFetchingProjectTag,
        isProjectTagFetchBottom
    } = useSelector(state => state.projectDetailReducer);

    const handleFetchTag = () => {
        actions.fetchProjectIssue(projectDetail.id)(dispatch);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + Math.ceil(window.scrollY) >=
                document.body.offsetHeight &&
            !isFetchingProjectTag &&
            !isProjectTagFetchBottom
        ) {
            handleFetchTag();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className="IssueTab_container w-full">
            <div className="IssueTab_title text-20 font-semibold">
                {CONST.tagTab_title}
            </div>
            <div className="IssueTab_Issues_container">
                {projectTagList.map(e => (
                    <IssueCard key={`pit${e.id}`} issue={e} />
                ))}
                {isFetchingProjectTag ? <LoadingSpinner /> : null}
                {isProjectTagFetchBottom ? HIT_BOTTOM : null}
            </div>
        </div>
    );
};

export default TagTab;
