import React from 'react';
import { CONST } from '../constants';
import { toLocalTime } from '../../../utils/generalUtils';

const DetailTab = ({ projectDetail }) => {
    const {
        create_time,
        description,
        finish_issue_count,
        isPrivate,
        issue_count,
        member_count,
        name,
        owner,
        tag_count
    } = projectDetail;
    return (
        <>
            <div className="max-w-sm w-full max-w-full flex">
                <div className="w-full border-r border-b border-l border-t border-gray-400 bg-white rounded rounded-b-none rounded-lg border-solid p-8 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <div className="projectDetail_header flex justify-between flex-row items-center">
                            <div className="projectDetail_title text-20 font-semibold">
                                <div className="projectDetail_subtitle text-18 font-semibold flex">
                                    {CONST.description}
                                    <br />
                                    {description}
                                </div>
                                <div className="projectDetail_subtitle text-18 font-semibold flex">
                                    {CONST.activeIssue}
                                    {issue_count}
                                </div>
                                <div className="projectDetail_subtitle text-18 font-semibold flex">
                                    {CONST.closeIssue}
                                    {finish_issue_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailTab;
