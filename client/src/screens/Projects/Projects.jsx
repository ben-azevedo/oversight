import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects(props) {
  const { projects, handleDelete, currentUser, onChange  } = props;

  return (
    <Layout onChange={onChange} user={currentUser}>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Link to={`/projects/${project.id}`}><p>{project.name}</p></Link>
            { project.user_id === currentUser?.id &&
              <>
                <Link to={`/projects/${project.id}/edit`}><button>edit</button></Link>
                <button onClick={() => handleDelete(project.id)}>delete</button>
              </>
            }
          </React.Fragment>
        ))}
        <br />
        <Link to='/projects/new'><button>Create</button></Link>
      </div>
    </Layout>
  );
}

export default Projects;