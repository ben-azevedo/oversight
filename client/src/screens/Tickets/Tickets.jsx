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
        <div className="a-severity">{ticket.severity}</div>
        <div className="a-name">{ticket.name}</div>
        <div className="a-p-name">{ticket.project?.name}</div>
        <div className="a-assigned">{ticket.user?.username}</div>
        <div className="a-type">{ticket.tipe}</div>
        <div className="a-status">{ticket.status}</div>
        <div className="a-created">{ticket.created_at}</div>
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
            <div className="ticket-a-severity a-severity">severity</div>
            <div className="ticket-a-severity a-name">name</div>
            <div className="ticket-a-severity a-p-name">project_name</div>
            <div className="ticket-a-severity a-assigned">assigned_to</div>
            <div className="ticket-a-severity a-type">type</div>
            <div className="ticket-a-severity a-status">status</div>
            <div className="ticket-a-severity a-created">created_at</div>
          </div>
          {ticketsJSX}
          <Link to={`/add-ticket`}>
            <button className="button-create-ticket"><i class="fa fa-plus-circle"></i><div className="ticket-button-label">Create Ticket</div></button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Tickets;