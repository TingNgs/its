import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../Layout';
import CardLayout from '../CardLayout';
import IssueAPI from '../../utils/api/apifetcher/issue';

import LoadingSpinner from '../LoadingSpinner';
import IssueActivity from '../IssueActivity';
import IssueActivityForm from '../IssueActivityForm';

import { red_alert } from '../../utils/configConst';
import './style.scss';
import MARK_ICON from '../../utils/image/exclamation-mark.svg';

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
            <CardLayout>
                <div className="issueDetail">
                    <img src={MARK_ICON} className="issueDetail_icon flex " />
                    <div className="flex">{issueDetail.name}</div>
                    <div className="hl" />
                    <div>
                        Description
                        <br />
                        <div className="font-thin text-14">
                            {issueDetail.description}
                        </div>
                    </div>
                    <div className="hl " />
                    <div>{issueDetail.isReproducible}</div>
                    <div>{issueDetail.priority}</div>
                    <div>{issueDetail.projectId}</div>
                </div>
            </CardLayout>
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
            <div className="issueDetail_container w-full bg-gray-200">
                {fetchingError ? (
                    fetchingError
                ) : issueDetail ? (
                    <React.Fragment>
                        {renderIssueDetail()}
                        {renderIssueActivity()}
                        <CardLayout>
                            <IssueActivityForm
                                issueDetail={issueDetail}
                                handleSubmit={handleAddIssueActivity}
                            />
                        </CardLayout>
                    </React.Fragment>
                ) : (
                    <LoadingSpinner />
                )}
            </div>
        </Layout>
    );
};

export default IssueDetail;
