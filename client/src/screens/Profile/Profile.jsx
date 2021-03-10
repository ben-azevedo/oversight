// import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import profile from "../../images/profile-image.png";
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
  const { user, onChange } = props;

  return (
    <Layout onChange={ onChange } user={props.user}>
      <div className="profile-card">
        <img className="profile-image" src={profile} />
        <div className="profile-info top-info"><span>username:</span> Ben Azevedo</div>
        <div className="profile-info"><span>email:</span> ben_azevedo@outlook.com</div>
        <div className="profile-info"><span>password:</span> *********</div>
        <div className="profile-info"><span>login status:</span> Administrator</div>
      </div>
    </Layout>
  );
}

export default Profile;