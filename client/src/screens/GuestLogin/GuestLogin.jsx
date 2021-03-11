import './GuestLogin.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-black.png";
import adminlogo from "../../images/user-admin.png";
import managerlogo from "../../images/user-manager.png";
import employeelogo from "../../images/user-employee.png";
import internlogo from "../../images/user-intern.png";

function GuestLogin(props) {
  const {handleLogin} = props

  return (
    <div className="landing">
      <div className="landing-container guest-login-container">
        <img className="logo" src={logo} />
        <div className="subhead">GUEST LOGIN</div>
        <div className="guest-tiles">
          <div onClick={(e) => {
              e.preventDefault();
              handleLogin({
                username: 'Ben Azevedo',
                password: '123456'
              });
            }}
            className="guest-tile">
            <img className="tile-logo" src={adminlogo} />
            <div style={{ padding: "4px" }}>Admin</div>
          </div>

          <div onClick={(e) => {
              e.preventDefault();
              handleLogin({
                username: 'manager',
                password: '123456'
              });
            }}
            className="guest-tile">
            <img className="tile-logo" src={managerlogo} />
            <div style={{ padding: "4px" }}>Manager</div>
          </div>

          <div onClick={(e) => {
              e.preventDefault();
              handleLogin({
                username: 'employee',
                password: '123456'
              });
            }}
            className="guest-tile">
            <img className="tile-logo" src={employeelogo} />
            <div style={{ padding: "4px" }}>Employee</div>
          </div>

          <div onClick={(e) => {
              e.preventDefault();
              handleLogin({
                username: 'intern',
                password: '123456'
              });
            }}
            className="guest-tile">
            <img className="tile-logo" src={internlogo} />
            <div style={{ padding: "4px" }}>Intern</div>
          </div>

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