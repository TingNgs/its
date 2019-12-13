import ProjectApi from '../../utils/api/apifetcher/project';
import IssueApi from '../../utils/api/apifetcher/issue';
import TagApi from '../../utils/api/apifetcher/tag';
import {
    FETCH_PROJECT_DETAIL,
    FETCH_PROJECT_DETAIL_SUCCESS,
    FETCH_PROJECT_DETAIL_FAIL,
    TOGGLE_NEW_ISSUE_FORM,
    ADD_NEW_ISSUE,
    ADD_NEW_ISSUE_SUCCESS,
    ADD_NEW_ISSUE_FAIL,
    FETCH_PROJECT_ISSUE,
    FETCH_PROJECT_ISSUE_SUCCESS,
    FETCH_PROJECT_ISSUE_FAIL,
    FETCH_PROJECT_ISSUE_BOTTOM,
    FETCH_PROJECT_TAG,
    FETCH_PROJECT_TAG_SUCCESS,
    FETCH_PROJECT_TAG_FAIL,
    FETCH_PROJECT_TAG_BOTTOM
} from './constants';

import {
    red_alert,
    FETCH_ISSUE_LIMIT,
    FETCH_TAG_LIMIT
} from '../../utils/configConst';

export const fetchProjectDetail = (user, project) => dispatch => {
    dispatch({ type: FETCH_PROJECT_DETAIL });
    ProjectApi.getProjectDetail({ user, project }).then(
        res => {
            dispatch({ type: FETCH_PROJECT_DETAIL_SUCCESS, payload: res.data });
        },
        rej => {
            const { response } = rej;
            const { status } = response;
            const errMsg =
                status === 404
                    ? red_alert.NOT_FOUND
                    : red_alert.TRY_AGAIN_LATHER;
            dispatch({ type: FETCH_PROJECT_DETAIL_FAIL, payload: errMsg });
        }
    );
};

export const toogleNewIssueForm = () => dispatch => {
    dispatch({ type: TOGGLE_NEW_ISSUE_FORM });
};

export const addNewIssue = query => dispatch => {
    dispatch({ type: ADD_NEW_ISSUE });
    IssueApi.addNewIssue(query).then(
        res => {
            dispatch({ type: ADD_NEW_ISSUE_SUCCESS, payload: res.data });
        },
        rej => {
            dispatch({
                type: ADD_NEW_ISSUE_FAIL,
                payload: red_alert.TRY_AGAIN_LATHER
            });
        }
    );
};

export const fetchProjectIssue = (projectId, timeStamp) => dispatch => {
    dispatch({ type: FETCH_PROJECT_ISSUE });
    const query = {
        timestamp: timeStamp,
        projectId: projectId,
        limit: FETCH_ISSUE_LIMIT
    };
    IssueApi.getIssueByProjectId(query).then(
        res => {
            if (res.data.length < FETCH_ISSUE_LIMIT)
                dispatch({
                    type: FETCH_PROJECT_ISSUE_BOTTOM,
                    payload: res.data
                });
            else
                dispatch({
                    type: FETCH_PROJECT_ISSUE_SUCCESS,
                    payload: res.data
                });
        },
        rej => {
            dispatch({ type: FETCH_PROJECT_ISSUE_FAIL });
        }
    );
};

export const fetchProjectTag = projectId => dispatch => {
    dispatch({ type: FETCH_PROJECT_TAG });
    const query = {
        projectId: projectId,
        limit: FETCH_TAG_LIMIT
    };
    TagApi.getTagByProjectId(query).then(
        res => {
            if (res.data.length < FETCH_TAG_LIMIT)
                dispatch({ type: FETCH_PROJECT_TAG_BOTTOM, payload: res.data });
            else
                dispatch({
                    type: FETCH_PROJECT_TAG_SUCCESS,
                    payload: res.data
                });
        },
        rej => {
            dispatch({ type: FETCH_PROJECT_TAG_FAIL });
        }
    );
};
