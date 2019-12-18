import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';

import IssueCard from '../../../components/IssueCard';
import LoadingSpinner from '../../../components/LoadingSpinner';

import { CONST } from '../constants';
import { HIT_BOTTOM } from '../../../utils/configConst';
import * as actions from '../actions';

const IssueTab = ({}) => {
    const dispatch = useDispatch();
    const {
        projectDetail,
        projectIssueList,
        isFetchingProjectIssue,
        isProjectIssueFetchBottom,
        projectIssueTimestamp
    } = useSelector(state => state.ProjectDetailReducer);

    const handleFetchIssue = () => {
        actions.fetchProjectIssue(
            projectDetail.id,
            projectIssueTimestamp
        )(dispatch);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + Math.ceil(window.scrollY) >=
                document.body.offsetHeight &&
            !isFetchingProjectIssue &&
            !isProjectIssueFetchBottom
        ) {
            handleFetchIssue();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        if (projectIssueTimestamp === null) {
            handleFetchIssue();
        }
    }, []);
    return (
        <>
            <div className="IssueTab_title text-20 font-semibold">
                {CONST.issueTab_title}
            </div>

            <div className="IssueTab_Issues_container">
                {projectIssueList.map(e => (
                    <IssueCard key={`pit${e.id}`} issue={e} />
                ))}
                {isFetchingProjectIssue ? <LoadingSpinner /> : null}
                {isProjectIssueFetchBottom ? HIT_BOTTOM : null}
            </div>
        </>
    );
};

export default IssueTab;
