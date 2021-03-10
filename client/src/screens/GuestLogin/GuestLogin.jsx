import './GuestLogin.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-black.png";
import adminlogo from "../../images/user-admin.png";
import managerlogo from "../../images/user-manager.png";
import employeelogo from "../../images/user-employee.png";
import internlogo from "../../images/user-intern.png";

function GuestLogin(props) {

  return (
    <div className="landing">
      <div className="landing-container guest-login-container">
        <img className="logo" src={logo} />
        <div className="subhead">GUEST LOGIN</div>
        <div className="guest-tiles">
          <Link to="/home">
            <div className="guest-tile">
              <img className="tile-logo" src={adminlogo} />
              <div style={{ padding: "4px" }}>Admin</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="guest-tile">
              <img className="tile-logo" src={managerlogo} />
              <div style={{ padding: "4px" }}>Manager</div>
            </div>
            </Link>
          <Link to="/home">
            <div className="guest-tile">
              <img className="tile-logo" src={employeelogo} />
              <div style={{ padding: "4px" }}>Employee</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="guest-tile">
              <img className="tile-logo" src={internlogo} />
              <div style={{ padding: "4px" }}>Intern</div>
            </div>
          </Link>
        </div>
        <div className="guest-login-links">
          <div>Create an account? <Link to="/sign-up" className="decoration-link">Sign Up</Link></div>
          <br></br>
          <div>Already have an account? <Link to="/sign-in" className="decoration-link">Sign In</Link></div>
        </div>
      </div>
    </div>
  );
}

export default GuestLogin;