import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TicketEdit.css';

function TicketEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;
  const { tickets, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const ticketItem = tickets.find((ticket) => ticket.id === Number(id));
      setFormData({
        name: ticketItem.name
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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}>
        <h3>Edit Ticket</h3>
        <label>Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </Layout>
  );
}

export default TicketEdit;
