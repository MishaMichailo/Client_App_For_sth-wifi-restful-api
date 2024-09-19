import React from 'react';
import Sidebar from '../components/SideBar';
import AccessPointIcon from '../components/items/AccessPointIcon';
import AttackIcon from '../components/items/AttackIcon';
import ClientDeviceIcon from '../components/items/ClientDeviceIcon';
import '../styles/MainContent.css';

const MainContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="cards">
            <div className="card">
              <AccessPointIcon />
              <p className="card-number">***</p>
              <p className="card-title">Access Points</p>
            </div>
            <div className="card">
              <ClientDeviceIcon />
              <p className="card-number">***</p>
              <p className="card-title">Client Devices</p>
            </div>
            <div className="card">
              <AttackIcon />
              <p className="card-number">***</p>
              <p className="card-title">Attacks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;