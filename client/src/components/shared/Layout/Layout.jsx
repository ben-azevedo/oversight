import "./Layout.css"
import logo from "../../../images/logo-black-background.png";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  const { user, permission, onChange } = props;

  return (
    <div className='layout'>
      <div className='left-nav'>
        <img className="logo-background" src={logo} />
        <div className="greeting">
          <div className="welcome">Welcome,</div>
          <div className="username">Barbara</div>
        </div>
        <div className="divide-line"></div>
        <div className="nav-links">
          <Link to="/home">
            <div className="nav-link">
              <i class="fa fa-home fa-2x"></i>
              <div className="nav-label">Home</div>
            </div>
          </Link>
          <Link to="/projects">
            <div className="nav-link">
              <i class="fa fa-flask fa-2x"></i>
              <div className="nav-label">Projects</div>
            </div>
          </Link>
          <Link to="/tickets">
            <div className="nav-link">
              <i class="fa fa-ticket fa-2x"></i>
              <div className="nav-label">Tickets</div>
            </div>
          </Link>
          <Link to="/manage-users">
            <div className="nav-link">
              <i class="fa fa-users fa-2x"></i>
              <div className="nav-label">Manage Users</div>
            </div>
          </Link>
        </div>
      </div>
      <div className='right-nav'>
        <div className='top-nav'>
          <div className='permission-statement'>Logged in as: <span>Administrator</span></div>
          <div className='top-nav-links'>
            <Link to="/my-profile">
              <div className="top-nav-link">
                <i class="fa fa-user-circle-o fa-2x"></i>
                <div className="nav-label">My Profile</div>
              </div>
            </Link>
            <Link to="/my-notifications">
              <div className="top-nav-link">
                <i class="fa fa-bell-o fa-2x"></i>
                <div className="nav-label">Notifications</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='page-content'>
          <div className='spacer'></div>
          <div className='content'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;