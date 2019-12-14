import React from 'react';
import { Link } from 'react-router-dom';
import { SIDE_BAR_ITEMS } from './constants';
import './index.scss';

const NavSideBar = props => {
    return (
        <div className="nav_sidebar bg-gray-300">
            <div className="nav_sidebar_container fixed flex flex-col">
                {SIDE_BAR_ITEMS.map(item => (
                    <Link
                        key={`sliderBar_${item.name}`}
                        className="nav_sidebar_link text-black font-bold hover:bg-gray-400 "
                        to={item.path}
                    >
                        <div className="">{item.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavSideBar;
