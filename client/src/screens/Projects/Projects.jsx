import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects(props) {
  const { projects, handleDelete, currentUser, onChange  } = props;

  const projectsJSX = projects.map((project, index) => (
    <Link to={`/projects/${project.id}`}>
      <div className="project-card">
        <div className="project-card-name">{project.name}</div>
        <div className="project-image">
          <div className="project-card-image-container">
            <img className="project-card-image" src={project.image} />
          </div>
        </div>
      </div>
    </Link>
  ));

  console.log(projects)

  return (
    <Layout onChange={onChange} currentUser={currentUser}>
      <div className="project-cards">
        {projectsJSX}
      </div>
    </Layout>
  );
}

export default Projects;