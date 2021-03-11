import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getOneTicket } from '../../services/tickets';
import { useState, useEffect } from 'react';
import './TicketDetails.css';

function TicketDetails(props) {
  const { tickets, currentUser, onChange, handleDelete } = props;
  const [ticketItem, setTicketItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTicketItem = async () => {
      const ticketData = await getOneTicket(id);
      setTicketItem(ticketData);
    }
    fetchTicketItem();
  }, [id])

  
  let severity = "green"
  if (ticketItem?.severity == "High") {
    severity = "red";
  } else if (ticketItem?.severity == "Medium") {
    severity = "#c1b728";
  }

  const ampm = (Number(ticketItem?.created_at.substring(11, 13)) > 12) ? "PM" : "AM";

  console.log(`severity = ${severity}`)

  return (
    <Layout onChange={onChange} currentUser={currentUser}>
      <div className="ticket-detail-container">
        <div className="ticket-top-details">
          <div style={{ color: `${severity}`, border: `1px solid ${severity}`}} className="ticket-severity">
            <i className="fa fa-bolt"></i>
            <div className="severe">{ticketItem?.severity} Severity</div>
          </div>
          <img style={{ border: `2px solid ${severity}`}}className="ticket-detail-image" src={ticketItem?.project.image} />
          <div className="ticket-desciptors">
            <div className="ticket-title"><span>{ticketItem?.name}</span></div>
            <div className="ticket-description">{ticketItem?.description}</div>
          </div>
        </div>
        <div className="ticket-bottom-details">
          <div><span>Assigned to:</span> {ticketItem?.user.username}</div>
          <div><span>Type:</span> {ticketItem?.tipe}</div>
          <div><span>Status:</span> {ticketItem?.status}</div>
          <div><span>Created:</span> {`${ticketItem?.created_at.substring(5, 7)}/${ticketItem?.created_at.substring(8, 10)}/${ticketItem?.created_at.substring(0, 4)} ${ticketItem?.created_at.substring(11, 19)}${ampm}`}</div>
        </div>
        <div className="ticket-buttons">
          <button className="ticket-actions" onClick={() => handleDelete(ticketItem?.id)}><i class="fa fa-trash"></i><div className="ticket-button-label">Delete Ticket</div></button>
          <Link to={`/tickets/${ticketItem?.id}/edit`}>
            <button className="ticket-actions"><i class="fa fa-pencil"></i><div className="ticket-button-label">Edit Ticket</div></button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default TicketDetails;