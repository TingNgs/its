import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';

import Layout from '../../components/Layout';
import AddButton from '../../components/AddButton';
import LoadingSpinner from '../../components/LoadingSpinner';
import IssueForm from '../../components/IssueForm';
import PopUp from '../../components/PopUp';

import DetailTab from './DetailTab';
import IssueTab from './IssueTab';
import TagTab from './TagTab';

import PRIVATE_ICON from '../../utils/image/locked_project.svg';
import PUBLIC_ICON from '../../utils/image/project.svg';

import { PROJECT_DETIAL_LINK } from '../../utils/pathConst';
import { CONST, TAB } from './constants';

import * as actions from './actions';

import './style.scss';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const ProjectDetail = () => {
    const { user, project } = useParams();
    const tab = useQuery().get('tab');
    const dispatch = useDispatch();
    const {
        isFetchingProjectDetail,
        projectDetail,
        showNewIssueForm,
        newIssueErrorMsg,
        isAddingIssue,
        fetchProjectDetailError
    } = useSelector(state => state.ProjectDetailReducer);
    let loadedProfile = projectDetail !== null;
    useEffect(() => {
        if (
            projectDetail &&
            user === projectDetail.owner &&
            project === projectDetail.name
        ) {
            loadedProfile = false;
            return;
        }
        actions.fetchProjectDetail(user, project)(dispatch);
    }, [user, project]);

    const toggleNewIssueForm = () => {
        actions.toogleNewIssueForm()(dispatch);
    };

    const handleSubmit = query => {
        query.projectId = projectDetail.id;
        actions.addNewIssue(query)(dispatch);
    };

    const renderProjectHeader = () => {
        return (
            <div className="projectDetail_header flex justify-between flex-row items-center">
                <div className="projectDetail_title text-20 font-semibold flex">
                    {CONST.projectName}
                    {project}
                </div>
                <AddButton
                    action={toggleNewIssueForm}
                    wording={CONST.reportIssue}
                />
            </div>
        );
    };
    const renderProjectTab = () => {
        return (
            <div className="projectDetail_tab_container flex justify-between flex-row items-center text-18 text-center">
                {TAB.map(e => (
                    <Link
                        to={`/p/${user}/${project}${
                            e.query ? `?tab=${e.query}` : ''
                        }`}
                        className={`projectDetail_tab flex-grow${
                            tab === e.query ? ' bg-main text-white' : ''
                        }`}
                        key={`pd_tab${e.name}`}
                    >
                        <div>{e.name}</div>
                    </Link>
                ))}
            </div>
        );
    };

    const renderMainContent = () => {
        switch (tab) {
            case TAB[1].query:
                return <IssueTab />;
            case TAB[2].query:
                return <TagTab />;
            case TAB[3].query:
                return '';
            default:
                return <DetailTab projectDetail={projectDetail} />;
        }
    };

    return (
        <Layout isLogined={true}>
            <div className="projectDetail w-full">
                {fetchProjectDetailError ? (
                    fetchProjectDetailError
                ) : (
                    <>
                        {renderProjectHeader()}
                        {renderProjectTab()}
                        {isFetchingProjectDetail || !loadedProfile ? (
                            <LoadingSpinner />
                        ) : (
                            renderMainContent()
                        )}
                    </>
                )}
            </div>
            {showNewIssueForm ? (
                <PopUp>
                    <IssueForm
                        handleCancel={isAddingIssue ? null : toggleNewIssueForm}
                        handleSubmit={handleSubmit}
                        errorMsg={newIssueErrorMsg}
                    />
                </PopUp>
            ) : null}
        </Layout>
    );
};

export default ProjectDetail;
