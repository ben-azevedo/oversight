// import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getOneProject } from '../../services/projects';
import { useState, useEffect } from 'react';
import './ProjectDetails.css';

function ProjectDetails(props) {
  const { tickets, currentUser, onChange } = props;
  const [projectItem, setProjectItem] = useState(null);
  const { id } = useParams();

  console.log("this is project item")
  console.log(projectItem)

  useEffect(() => {
    const fetchProjectItem = async () => {
      const projectData = await getOneProject(id);
      setProjectItem(projectData);
    }
    fetchProjectItem();
  }, [id])

  const ticketsJSX = tickets.filter(ticket => ticket?.project.name == projectItem?.name).map((ticket, index) => (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="ticket-line">
      <div className="a-severity">{ticket.severity}</div>
      <div className="a-name">{ticket.name}</div>
      <div className="a-p-name">{ticket.project?.name}</div>
      <div className="a-assigned">{ticket.user?.username}</div>
      <div className="a-type">{ticket.tipe}</div>
      <div className="a-status">{ticket.status}</div>
      <div className="a-created">{`${ticket?.created_at.substring(5, 7)}/${ticket?.created_at.substring(8, 10)}/${ticket?.created_at.substring(0, 4)} ${ticket?.created_at.substring(11, 19)}`}</div>
      <div>details</div>
      </div>
    </Link>
  ));

  // const usersJSX = projectItem?.users.map((user, index) => (
  //   <div className="ticket-line">
  //     <div className="c-user">{user.severity}</div>
  //     <div className="c-email">{user.username}</div>
  //     <div className="c-role">{user.role}</div>
  //     <div>details</div>
  //   </div>
  // ));

  // let severity = "green"
  // if (ticketItem?.severity == "High") {
  //   severity = "red";
  // } else if (ticketItem?.severity == "Medium") {
  //   severity = "#c1b728";
  // }

  // const ampm = (Number(ticketItem?.created_at.substring(11, 13)) > 12) ? "PM" : "AM";

  return (
    <Layout onChange={onChange} currentUser={currentUser}>
      <div className="project-detail-container">
        <div className="ticket-top-details project-details">
          <img className="ticket-detail-image" src={projectItem?.image} />
          <div className="project-desciptors">
            <div className="ticket-title"><span>{projectItem?.name}</span></div>
            <div className="ticket-description">{projectItem?.description}</div>
          </div>
        </div>
        <div className="project-bottom-details">
          <div className="ass-tickets">
            <div className="ass-tickets-header">Associated Tickets</div>
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
            </div>
          </div>
          {/* <div><span>Assigned to:</span> {projectItem?.user.username}</div>
          <div><span>Type:</span> {projectItem?.tipe}</div>
          <div><span>Status:</span> {projectItem?.status}</div>
          <div><span>Created:</span> {`${projectItem?.created_at.substring(5, 7)}/${projectItem?.created_at.substring(8, 10)}/${projectItem?.created_at.substring(0, 4)} ${projectItem?.created_at.substring(11, 19)}${ampm}`}</div> */}
        </div>
      </div>
    </Layout>
  );
}

export default ProjectDetails;
















// // import React from 'react';
// import Layout from '../../components/shared/Layout/Layout';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { getOneProject } from '../../services/projects';
// import { useState, useEffect } from 'react';
// import './ProjectDetails.css';

// function ProjectDetails(props) {
//   const { tickets, currentUser, onChange } = props;
//   const [projectItem, setProjectItem] = useState(null);
//   const { id } = useParams();

//   console.log("this is project item")
//   console.log(projectItem)

//   useEffect(() => {
//     const fetchProjectItem = async () => {
//       const projectData = await getOneProject(id);
//       setProjectItem(projectData);
//     }
//     fetchProjectItem();
//   }, [id])

//   const ticketsJSX = tickets.filter(ticket => ticket?.project.name == projectItem?.name).map((ticket, index) => (
//     <Link to={`/tickets/${ticket.id}`}>
//       <div className="ticket-line">
//         <div className="c-severity">{ticket.severity}</div>
//         <div className="c-name">{ticket.name}</div>
//         <div className="c-assigned">{ticket.user?.username}</div>
//         <div className="c-status">{ticket.status}</div>
//         <div className="c-created">{`${ticket?.created_at.substring(5, 7)}/${ticket?.created_at.substring(8, 10)}/${ticket?.created_at.substring(0, 4)} ${ticket?.created_at.substring(11, 19)}`}</div>
//         <div>details</div>
//       </div>
//     </Link>
//   ));

//   // const usersJSX = projectItem?.users.map((user, index) => (
//   //   <div className="ticket-line">
//   //     <div className="c-user">{user.severity}</div>
//   //     <div className="c-email">{user.username}</div>
//   //     <div className="c-role">{user.role}</div>
//   //     <div>details</div>
//   //   </div>
//   // ));

//   // let severity = "green"
//   // if (ticketItem?.severity == "High") {
//   //   severity = "red";
//   // } else if (ticketItem?.severity == "Medium") {
//   //   severity = "#c1b728";
//   // }

//   // const ampm = (Number(ticketItem?.created_at.substring(11, 13)) > 12) ? "PM" : "AM";

//   return (
//     <Layout onChange={onChange} currentUser={currentUser}>
//       <div className="project-detail-container">
//         <div className="ticket-top-details project-details">
//           <img className="ticket-detail-image" src={projectItem?.image} />
//           <div className="project-desciptors">
//             <div className="ticket-title"><span>{projectItem?.name}</span></div>
//             <div className="ticket-description">{projectItem?.description}</div>
//           </div>
//         </div>
//         <div className="project-bottom-details">
//           <div className="ass-users">
//             <div className="ass-users-header">Associated Users</div>
//             <div className="ticket-list">
//               <div className="ticket-labels">
//                 <div className="ticket-a-severity c-user">user</div>
//                 <div className="ticket-a-severity c-email">email</div>
//                 <div className="ticket-a-severity c-role">role</div>
//               </div>
//               {ticketsJSX}
//             </div>
//           </div>
//           <div className="ass-divider"></div>
//           <div className="ass-tickets">
//             <div className="ass-tickets-header">Associated Tickets</div>
//             <div className="ticket-list">
//               <div className="ticket-labels">
//                 <div className="ticket-a-severity c-severity">severity</div>
//                 <div className="ticket-a-severity c-name">name</div>
//                 <div className="ticket-a-severity c-assigned">assigned_to</div>
//                 <div className="ticket-a-severity c-status">status</div>
//                 <div className="ticket-a-severity c-created">created_at</div>
//               </div>
//               {ticketsJSX}
//             </div>
//           </div>
//           {/* <div><span>Assigned to:</span> {projectItem?.user.username}</div>
//           <div><span>Type:</span> {projectItem?.tipe}</div>
//           <div><span>Status:</span> {projectItem?.status}</div>
//           <div><span>Created:</span> {`${projectItem?.created_at.substring(5, 7)}/${projectItem?.created_at.substring(8, 10)}/${projectItem?.created_at.substring(0, 4)} ${projectItem?.created_at.substring(11, 19)}${ampm}`}</div> */}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default ProjectDetails;