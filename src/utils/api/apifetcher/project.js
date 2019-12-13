import api from '../api';
import { apihost } from '../../configConst';

const ProjectApi = {};

ProjectApi.addNewProject = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/project?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

ProjectApi.getProject = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/project/get?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

ProjectApi.getProjectDetail = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/project/detail?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

ProjectApi.getProjectTags = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/project/tags?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

ProjectApi.addProjectMember = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/project/member?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

ProjectApi.getProjectMember = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/project/getMember?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

export default ProjectApi;
