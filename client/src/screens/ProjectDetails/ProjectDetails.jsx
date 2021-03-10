// import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails(props) {
  const { user, onChange } = props;

  return (
    <Layout onChange={ onChange } user={props.user}>
      
    </Layout>
  );
}

export default ProjectDetails;