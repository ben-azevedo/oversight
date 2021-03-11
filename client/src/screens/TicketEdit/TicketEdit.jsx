import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TicketEdit.css';

function TicketEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    severity: '',
    tipe: '',
    status: '',
    user_id: '',
    project_id: '',
  });
  const { name, description, severity, tipe, status, user_id, project_id } = formData;
  const { tickets, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const ticketItem = tickets.find((ticket) => ticket.id === Number(id));
      setFormData({
        name: ticketItem.name,
        description: ticketItem.description,
        severity: ticketItem.severity,
        tipe: ticketItem.tipe,
        status: ticketItem.status,
        user_id: ticketItem?.user?.id,
        project_id: ticketItem?.project?.id
      });
    }
    if (tickets.length) {
      prefillFormData();
    }
  }, [tickets, id])

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
        <div className="ticket-edit-header">Edit Ticket</div>
        <div className="ticket-edit-content">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
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
              <i class="fa fa-pencil"></i>
              <div className="ticket-edit-button-label">Update</div>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default TicketEdit;
