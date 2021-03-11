// import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import profile from "../../images/profile-image.png";
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
  const { currentUser, onChange } = props;

  return (
    <Layout onChange={ onChange } currentUser={currentUser}>
      <div className="profile-card">
        <img className="profile-image" src={currentUser?.image} />
        <div className="profile-info top-info"><span>username:</span> {currentUser?.username}</div>
        <div className="profile-info"><span>email:</span> {currentUser?.email}</div>
        <div className="profile-info"><span>password:</span> ******</div>
        <div className="profile-info"><span>login status:</span> {currentUser?.permission}</div>
      </div>
    </Layout>
  );
}

export default Profile;