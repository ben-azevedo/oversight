import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './Notifications.css';

function Notifications(props) {
  const { tickets, projects, currentUser, onChange } = props;

  const ticketsJSX = tickets.filter(ticket => ticket?.user?.username == currentUser?.username).map((ticket, index) => (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="ticket-line">
        <div className="b-severity">{ticket.severity}</div>
        <div className="b-name">{ticket.name}</div>
        <div className="b-p-name">{ticket.project.name}</div>
        <div className="b-type">{ticket.tipe}</div>
        <div className="b-status">{ticket.status}</div>
        <div className="b-created">{ticket.created_at}</div>
        <div>details</div>
      </div>
    </Link>
  ));

  // const projectsJSX = projects.filter(project => project?.user?.username == currentUser.username).map((project, index) => (
  //   <Link to={`/projects/${project.id}`}>
  //     <div className="project-line">
  //       <div className="b-severity">{project.severity}</div>
  //       <div className="b-name">{project.name}</div>
  //       <div className="b-p-name">{project.project.name}</div>
  //       <div className="b-type">{project.tipe}</div>
  //       <div className="b-status">{project.status}</div>
  //       <div className="b-created">{project.created_at}</div>
  //       <div>details</div>
  //     </div>
  //   </Link>
  // ));

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
        {/* <div className="notifications-spacer"></div>
        <div className="home-header">Projects</div>
        <div className="ticket-list">
          <div className="ticket-labels">
            <div className="ticket-a-severity b-severity">severity</div>
            <div className="ticket-a-severity b-name">name</div>
            <div className="ticket-a-severity b-p-name">project_name</div>
            <div className="ticket-a-severity b-type">type</div>
            <div className="ticket-a-severity b-status">status</div>
            <div className="ticket-a-severity b-created">created_at</div>
          </div>
          {projectsJSX}
        </div> */}
      </div>
    </Layout>
  );
}

export default Notifications;