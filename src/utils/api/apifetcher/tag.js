import api from '../api';
import { apihost } from '../../configConst';

const TagAPI = {};

TagAPI.addNewTag = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/tag?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

TagAPI.getTagByProjectId = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/tag/project?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

TagAPI.getTagByUserId = query => {
    const url = `${
        apihost[process.env.REACT_APP_ENV]
    }/tag/get?sessionId=${localStorage.getItem('sessionId')}`;
    return api.fire({
        url,
        method: 'POST',
        data: query
    });
};

export default TagAPI;
