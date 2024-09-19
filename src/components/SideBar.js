import React, { useState } from 'react';
import HoneypodIcon from './items/HoneypodIcon';
import SensorsIcon from './items/SensorsIcon';
import ComputeIcon from './items/ComputeIcon';
import AlertsIcon from './items/AlertsIcon';
import DiagnosticIcon from './items/DiagnosticIcon';
import AccessPointIcon from './items/AccessPointIcon';
import ClientDeviceIcon from './items/ClientDeviceIcon';
import AttackIcon from './items/AttackIcon';
import MainSettingIcon from './items/MainSettingIcon';
import LogOutIcon from './items/LogOutIcon';
import AvatarIcon from './items/AvatarIcon';
import HideMenuIcon from './items/HideMenuIcon';
import '../styles/Sidebar.css';


const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menu) => {
        setOpenMenus(prevOpenMenus => ({
            ...prevOpenMenus,
            [menu]: !prevOpenMenus[menu]
        }));
    };


    return (
        <div className="sidebar">
            <div className="menu-item">
                <div className='sideBar-head'>
                    <AvatarIcon />
                    <div className="user-details">
                        <h4>Username</h4>
                    </div>
                </div>
                <div className="menu-header" onClick={() => toggleMenu('honeypods')}>
                    <span>System</span>
                </div>
                {openMenus['honeypods'] && (
                    <div className="menu-content">
                        <a href="#/1"> <HoneypodIcon />Honeypods</a><br />
                        <a href="#/2"><SensorsIcon />Sensors</a><br />
                        <a href="#/2"><ComputeIcon />Compute</a><br />
                        <a href="#/2"><AlertsIcon />Alerts</a><br />
                        <a href="#/2"><DiagnosticIcon />Diagnostics</a>
                    </div>
                )}
            </div>
            <div className="menu-item">
                <div className="menu-header" onClick={() => toggleMenu('sensors')}>
                    <span>Findings</span>
                </div>
                {openMenus['sensors'] && (
                    <div className="menu-content">
                        <a href="#/3"><AccessPointIcon />Access Points</a><br />
                        <a href="#/4"><ClientDeviceIcon />Client Devices</a><br />
                        <a href="#/5"><AttackIcon />Attacks</a>
                    </div>
                )}
            </div>
            <div className="menu-item">
                <div className="menu-header" onClick={() => toggleMenu('compute')}>
                    <span>Settings</span>
                </div>
                {openMenus['compute'] && (
                    <div className="menu-content">
                        <a href="#/5"><MainSettingIcon />Main Settings</a><br />
                        <a href="#/6"><LogOutIcon />Log Out</a>
                    </div>
                )}
            </div>
            <div className="menu-content" id='hide'>
                <a href=''><HideMenuIcon/>Hide Menu</a>
            </div>
        </div>
    );
};

export default Sidebar;