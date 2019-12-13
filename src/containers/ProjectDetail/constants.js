export const FETCH_PROJECT_DETAIL = 'Project_DETAIL/FETCH_PROJECT_DETAIL';
export const FETCH_PROJECT_DETAIL_SUCCESS =
    'Project_DETAIL/FETCH_PROJECT_DETAIL_SUCCESS';
export const FETCH_PROJECT_DETAIL_FAIL =
    'Project_DETAIL/FETCH_PROJECT_DETAIL_FAIL';

export const TOGGLE_NEW_ISSUE_FORM = 'Project_DETAIL/TOGGLE_NEW_ISSUE_FORM';
export const ADD_NEW_ISSUE = 'Project_DETAIL/ADD_NEW_PROJECT';
export const ADD_NEW_ISSUE_SUCCESS = 'Project_DETAIL/ADD_NEW_ISSUE_SUCCESS';
export const ADD_NEW_ISSUE_FAIL = 'Project_DETAIL/ADD_NEW_ISSUE_FAIL';

export const FETCH_PROJECT_ISSUE = 'Project_DETAIL/FETCH_PROJECT_ISSUE';
export const FETCH_PROJECT_ISSUE_SUCCESS =
    'Project_DETAIL/FETCH_PROJECT_ISSUE_SUCCESS';
export const FETCH_PROJECT_ISSUE_FAIL =
    'Project_DETAIL/FETCH_PROJECT_ISSUE_FAIL';
export const FETCH_PROJECT_ISSUE_BOTTOM =
    'Project_DETAIL/FETCH_PROJECT_ISSUE_BOTTOM';

export const FETCH_PROJECT_TAG = 'Project_DETAIL/FETCH_PROJECT_TAG';
export const FETCH_PROJECT_TAG_SUCCESS =
    'Project_DETAIL/FETCH_PROJECT_TAG_SUCCESS';
export const FETCH_PROJECT_TAG_FAIL = 'Project_DETAIL/FETCH_PROJECT_TAG_FAIL';
export const FETCH_PROJECT_TAG_BOTTOM =
    'Project_DETAIL/FETCH_PROJECT_TAG_BOTTOM';

export const CONST = {
    projectName: ' Project name : ',
    owner: 'Project owner : ',
    description: 'Description : ',
    createAT: ' Create At : ',
    activeIssue: 'Active Issue : ',
    closeIssue: 'Closed Issue : ',
    memberCount: 'Member : ',
    TagCount: 'Tags : ',
    reportIssue: 'Report A Issue',
    issueTab_title: 'Issue List',
    tagTab_title: 'Tag List',
    memberTab_title: 'Member List'
};

export const TAB = [
    { query: null, name: 'Detail' },
    { query: 'issue', name: 'Issue' },
    { query: 'tag', name: 'Tag' },
    { query: 'member', name: 'Member' }
];
