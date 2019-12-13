import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AuthAPI from '../../../utils/api/apifetcher/auth';

import * as action from '../../../containers/Auth/actions';
import * as PATH from '../../../utils/pathConst';

import './header.scss';

const Header = props => {
    const dispatch = useDispatch();
    const { username } = useSelector(state => state.AuthReducer);

    const handleLogout = () => {
        AuthAPI.logout();
        action.logout()(dispatch);
        props.history.push('/login');
    };

    return (
        <div className="header flex justify-between items-center bg-blue-500 sticky top-0">
            <div className="text-28">
                <Link to={PATH.DASHBOARD}>ITS</Link>
            </div>
            <div className="header_link_container flex text-16">
                <p className="header_link text-center">{`Hi ${username}`}</p>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-sans font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default withRouter(Header);
