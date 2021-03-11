import Layout from '../../components/shared/Layout/Layout';
import { getOneUser } from '../../services/users';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Notifications.css';

function Notifications(props) {
  const { tickets, projects, currentUser, onChange } = props;
  const [userItem, setUserItem] = useState(null);

  useEffect(() => {
    const fetchUserItem = async () => {
      const userData = await getOneUser(currentUser?.id);
      setUserItem(userData);
    }
    fetchUserItem();
  }, [currentUser])

  const ticketsJSX = tickets.filter(ticket => ticket?.user?.username == currentUser?.username).map((ticket, index) => (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="ticket-line">
        <div className="b-severity">{ticket.severity}</div>
        <div className="b-name">{ticket.name}</div>
        <div className="b-p-name">{ticket.project.name}</div>
        <div className="b-type">{ticket.tipe}</div>
        <div className="b-status">{ticket.status}</div>
        <div className="b-created">{`${ticket?.created_at.substring(5, 7)}/${ticket?.created_at.substring(8, 10)}/${ticket?.created_at.substring(0, 4)} ${ticket?.created_at.substring(11, 19)}`}</div>
        <div>details</div>
      </div>
    </Link>
  ));

  const projectsJSX = userItem?.projects.map((project, index) => (
    <Link to={`/projects/${project?.id}`}>
      <div className="ticket-line">
        <div className="e-p-name">{project.name}</div>
        <div className="e-description">{project?.description}</div>
        <div className="e-created">{`${project?.created_at.substring(5, 7)}/${project?.created_at.substring(8, 10)}/${project?.created_at.substring(0, 4)} ${project?.created_at.substring(11, 19)}`}</div>
        <div>details</div>
      </div>
    </Link>
  ));

  return (
    <Layout onChange={ onChange } currentUser={currentUser}>
      <div>
        <div className="home-header">My Tickets</div>
        <div className="ticket-list">
          <div className="ticket-labels">
            <div className="ticket-a-severity b-severity">severity</div>
            <div className="ticket-a-severity b-name">name</div>
            <div className="ticket-a-severity b-p-name">project_name</div>
            <div className="ticket-a-severity b-type">type</div>
            <div className="ticket-a-severity b-status">status</div>
            <div className="ticket-a-severity b-created">created_at</div>
          </div>
          {ticketsJSX}
        </div>
        <div className="notifications-spacer"></div>
        <div className="home-header">My Projects</div>
        <div className="ticket-list">
          <div className="ticket-labels">
            <div className="e-p-name">name</div>
            <div className="e-description">description</div>
            <div className="e-created">created_at</div>
          </div>
          {projectsJSX}
        </div>
      </div>
    </Layout>
  );
}

export default Notifications;