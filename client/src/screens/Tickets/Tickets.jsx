import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './Tickets.css';

function Tickets(props) {
  const { tickets, handleDelete, currentUser, onChange  } = props;

  console.log("these are ma tickets");
  console.log(tickets);
  const ticketsJSX = tickets.map((ticket, index) => (
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

  console.log(tickets)

  return (
    <Layout onChange={onChange} currentUser={currentUser}>
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

export default Tickets;