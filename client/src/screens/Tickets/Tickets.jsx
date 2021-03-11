import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './Tickets.css';

function Tickets(props) {
  const { tickets, handleDelete, currentUser, onChange  } = props;

  const ticketsJSX = tickets.map((ticket, index) => (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="ticket-line">
        <div>{ticket.severity}</div>
        <div>{ticket.name}</div>
        <div>{ticket.project_id}</div>
        <div>{ticket.user_id}</div>
        <div>{ticket.tipe}</div>
        <div>{ticket.status}</div>
        <div>{ticket.created_at}</div>
        <div>details</div>
      </div>
    </Link>
  ));

  console.log(tickets)

  return (
    <Layout onChange={onChange} user={currentUser}>
      <div>
        {ticketsJSX}
      </div>
    </Layout>
  );
}

export default Tickets;