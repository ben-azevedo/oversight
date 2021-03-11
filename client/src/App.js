import { useState, useEffect } from 'react';
import { useHistory, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Landing from './screens/Landing/Landing';
import Login from './screens/Login/Login';
import Registration from './screens/Registration/Registration';
import GuestLogin from './screens/GuestLogin/GuestLogin';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import Notifications from './screens/Notifications/Notifications';
import Projects from './screens/Projects/Projects';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';
import Tickets from './screens/Tickets/Tickets';
import TicketDetails from './screens/TicketDetails/TicketDetails';
import TicketEdit from './screens/TicketEdit/TicketEdit';
import TicketCreate from './screens/TicketCreate/TicketCreate';
import ManageUsers from './screens/ManageUsers/ManageUsers';

import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import { getAllProjects, getOneProject } from './services/projects';
import { destroyTicket, getAllTickets, postTicket, putTicket } from './services/tickets';

function App() {

  const [projects, setProjects] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      setCurrentUser(user)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const user = await loginUser(formData);
      setCurrentUser(user);
      setError(null);
      history.push('/home');
    } catch (e) {
      setError("invalid login credentials");
    }
  }

  const handleRegister = async (formData) => {
    try {
      const user = await registerUser(formData);
      setCurrentUser(user);
      history.push('/sign-in');
    } catch (e) {
      setError("invalid sign up info")
    }
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
  
  // get all the projects
  useEffect(() => {
    const fetchProjects = async () => {
      const projectsList = await getAllProjects();
      console.log('fetch process');
      console.log(projectsList);
      setProjects(projectsList);
    }
    fetchProjects();
  }, [])

  // get all the tickets
  useEffect(() => {
    const fetchTicket = async () => {
      const ticketList = await getAllTickets();
      console.log('fetch process');
      console.log(ticketList);
      setTickets(ticketList);
    }
    fetchTicket();
  }, [])

  // delete tickets
  const handleDelete = async (id) => {
    await destroyTicket(id);
    setTickets(prevState => prevState.filter((ticket) => ticket.id !== id))
    history.push('/tickets');
  }

  const handleUpdate = async (id, formData) => {
    const updatedTicket = await putTicket(id, formData);
    setTickets(prevState => prevState.map((ticket) => {
      return ticket.id === Number(id) ? updatedTicket : ticket
    }));
    history.push('/tickets');
  }

  const handleCreate = async (formData) => {
    const newTicket = await postTicket(formData);
    setTickets(prevState => [...prevState, newTicket]);
    history.push('/tickets');
  }
    
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/sign-in">
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path="/sign-up">
          <Registration handleRegister={handleRegister}/>
        </Route>
        <Route path="/guest-sign-in">
          <GuestLogin handleLogin={handleLogin}/>
        </Route>
        <Route path="/home">
          <Home currentUser={currentUser}/>
        </Route>
        <Route path="/my-profile">
          <Profile currentUser={currentUser}/>
        </Route>
        <Route path="/my-notifications">
          <Notifications tickets={tickets} projects={projects} currentUser={currentUser}/>
        </Route>
        <Route exact path="/projects">
          <Projects projects={projects} currentUser={currentUser}/>
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetails currentUser={currentUser}/>
        </Route>
        <Route exact path="/tickets/:id">
          <TicketDetails tickets={tickets} handleDelete={handleDelete} currentUser={currentUser}/>
        </Route>
        <Route exact path="/tickets/:id/edit">
          <TicketEdit tickets={tickets} handleUpdate={handleUpdate} currentUser={currentUser}/>
        </Route>
        <Route exact path="/tickets">
          <Tickets tickets={tickets} currentUser={currentUser}/>
        </Route>
        <Route exact path="/add-ticket">
          <TicketCreate tickets={tickets} currentUser={currentUser} handleCreate={handleCreate}/>
        </Route>
        <Route path="/manage-users">
          <ManageUsers currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;