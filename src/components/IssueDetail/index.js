import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../Layout';
import IssueAPI from '../../utils/api/apifetcher/issue';

import LoadingSpinner from '../LoadingSpinner';
import IssueActivity from '../IssueActivity';
import IssueActivityForm from '../IssueActivityForm';

import { red_alert } from '../../utils/configConst';
import './style.scss';

const IssueDetail = () => {
    const { issueId } = useParams();
    const [issueDetail, setIssueDetail] = useState(null);
    const [fetchingError, setFetchingError] = useState(null);

    useEffect(() => {
        if (issueDetail != null) setIssueDetail(null);
        IssueAPI.getIssueByIssueId(issueId).then(
            res => {
                setIssueDetail(res.data);
            },
            rej => {
                const { status } = rej.response;
                if (status === 404) setFetchingError(red_alert.NOT_FOUND);
                else setFetchingError(red_alert.TRY_AGAIN_LATER);
            }
        );
    }, [issueId]);

    const handleAddIssueActivity = query => {
        IssueAPI.addIssueActivity(query).then(
            res => {
                setIssueDetail(res.data);
            },
            rej => {
                const { status } = rej.response;
                if (status === 404) setFetchingError(red_alert.NOT_FOUND);
                else setFetchingError(red_alert.TRY_AGAIN_LATER);
            }
        );
    };

    const renderIssueDetail = () => {
        return (
            <div className="issueDetail">
                <div>:{issueDetail.name}</div>
                <div>{issueDetail.description}</div>
                <div>{issueDetail.isReproducible}</div>
                <div>{issueDetail.priority}</div>
                <div>{issueDetail.projectId}</div>
                <div>{issueDetail.description}</div>
                <div>{issueDetail.name}</div>
                <div>{issueDetail.description}</div>
            </div>
        );
    };

    const renderIssueActivity = () => {
        const { activity } = issueDetail;
        return (
            <div className="issueDetail_activity">
                {activity.map((activity, i) => (
                    <IssueActivity
                        key={`issue_activity${i}${activity.id}`}
                        activity={activity}
                    />
                ))}
            </div>
        );
    };
    console.log('Here is the issue detail', issueDetail);
    return (
        <Layout isLogined={true}>
            <div className="issueDetail_container">
                {fetchingError ? (
                    fetchingError
                ) : issueDetail ? (
                    <React.Fragment>
                        {renderIssueDetail()}
                        {renderIssueActivity()}
                        <IssueActivityForm issueDetail={issueDetail} />
                    </React.Fragment>
                ) : (
                    <LoadingSpinner />
                )}
            </div>
        </Layout>
    );

    console.log('Here is the issue detail', issueDetail);
    return (
        <Layout isLogined={true}>
            <div className="issueDetail_container">
                {fetchingError ? (
                    fetchingError
                ) : issueDetail ? (
                    <React.Fragment>
                        {renderIssueDetail()}
                        {renderIssueActivity()}
                        <IssueActivityForm
                            issueDetail={issueDetail}
                            handleSubmit={handleAddIssueActivity}
                        />
                    </React.Fragment>
                ) : (
                    <LoadingSpinner />
                )}
            </div>
        </Layout>
    );
};

export default IssueDetail;
