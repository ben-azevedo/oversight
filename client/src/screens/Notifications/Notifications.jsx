import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './Notifications.css';

function Notifications(props) {
  const { tickets, projects, currentUser, onChange } = props;

  const ticketsJSX = tickets.filter(ticket => ticket.user.username == currentUser.username).map((ticket, index) => (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="ticket-line">
        <div>{ticket.severity}</div>
        <div>{ticket.name}</div>
        <div>{ticket.project.name}</div>
        <div>{ticket.user.username}</div>
        <div>{ticket.tipe}</div>
        <div>{ticket.status}</div>
        <div>{ticket.created_at}</div>
        <div>details</div>
      </div>
    </Link>
  ));

  return (
    <Layout onChange={ onChange } currentUser={currentUser}>
      <div>
        <div className="home-header">Tickets</div>
        <div className="ticket-list">
          <div className="ticket-labels">
            <div className="ticket-severity">severity</div>
            <div className="ticket-severity">severity</div>
            <div className="ticket-severity">severity</div>
            <div className="ticket-severity">severity</div>
            <div className="ticket-severity">severity</div>
            <div className="ticket-severity">severity</div>
            <div className="ticket-severity">severity</div>
          </div>
          {ticketsJSX}
        </div>
      </div>
    </Layout>
  );
}

export default Notifications;