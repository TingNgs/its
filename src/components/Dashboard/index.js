import React, { useState } from 'react';
import CardLayout from '../CardLayout';
import Layout from '../Layout';
import './style.scss';
const Dashboard = () => {
    return (
        <div className="dashboard w-full bg-gray-200">
            <CardLayout>
                <div className="dashboard_title text-20 font-semibold flex">
                    Welcome to ITS
                </div>
                <div className="hl"></div>
                <div className="dashboard_content text-18 flex">
                    An issue tracking system (also ITS, trouble ticket system,
                    support ticket, request management or incident ticket
                    system) is a computer software package that manages and
                    maintains lists of issues.[1] Issue tracking systems are
                    generally used in collaborative settings—especially in large
                    or distributed collaborations—but can also be employed by
                    individuals as part of a time management or personal
                    productivity regime. These systems often encompass resource
                    allocation, time accounting, priority management, and
                    oversight workflow in addition to implementing a centralized
                    issue registry.
                </div>
            </CardLayout>
        </div>
    );
};

export default Dashboard;
