import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './TicketDetails.css';

function TicketDetails(props) {
  const { tickets, currentUser, onChange, handleDelete } = props;

  return (
    <Layout onChange={onChange} currentUser={currentUser}>
      <div className="ticket-detail-container">
        <Link to={`/tickets/${tickets.id}/edit`}><button>edit</button></Link>
        <button onClick={() => handleDelete(tickets.id)}>delete</button>
      </div>
    </Layout>
  );
}

export default TicketDetails;