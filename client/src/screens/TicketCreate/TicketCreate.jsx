import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TicketCreate.css';

function TicketCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name, description, severity, tipe, status, user_id, project_id } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Layout currentUser={props.currentUser}>
      <div className="ticket-edit-container">
        <div className="ticket-edit-header">Create Ticket</div>
        <div className="ticket-edit-content">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}>
            <label><span>Name: </span>
              <input
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </label>
            <label><span>Description: </span>
              <input
                type='text'
                name='description'
                value={description}
                onChange={handleChange}
              />
            </label>
            <label><span>Severity: </span>
              <input
                type='text'
                name='severity'
                value={severity}
                onChange={handleChange}
              />
            </label>
            <label><span>Type: </span>
              <input
                type='text'
                name='tipe'
                value={tipe}
                onChange={handleChange}
              />
            </label>
            <label><span>Status: </span>
              <input
                type='text'
                name='status'
                value={status}
                onChange={handleChange}
              />
            </label>
            <label><span>Assigned to: </span>
              <input
                type='text'
                name='user_id'
                value={user_id}
                onChange={handleChange}
              />
            </label>
            <label><span>Project: </span>
              <input
                type='text'
                name='project_id'
                value={project_id}
                onChange={handleChange}
              />
            </label>
            <br />
            <button className="ticket-edit-button">
              <i class="fa fa-plus-circle"></i>
              <div className="ticket-edit-button-label">Create</div>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default TicketCreate;
