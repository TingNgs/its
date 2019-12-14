import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AuthAPI from '../../../utils/api/apifetcher/auth';

import * as action from '../../../containers/Auth/actions';
import * as PATH from '../../../utils/pathConst';
import logo from '../../../cover.png';

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
        <div className="header flex flex-wrap justify-between items-center border_custom sticky top-0 ">
            <div className="w-1/5">
                <Link to={PATH.DASHBOARD}>
                    <img src={logo} width="45%" />
                </Link>
            </div>
            <div className="header_link_container flex text-16 ">
                <p className="header_link text-center">{`Hi ${username}`}</p>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-sans font-semibold py-2 px-4 border border-gray-400 rounded "
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default withRouter(Header);
