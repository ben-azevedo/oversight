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
import TicketDetails from './screens/TicketEdit/TicketEdit';
import TicketEdit from './screens/TicketEdit/TicketEdit';
import TicketCreate from './screens/TicketCreate/TicketCreate';
import ManageUsers from './screens/ManageUsers/ManageUsers';

import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser);
      setError(null);
      history.push('/');
    } catch (e) {
      setError("invalid login credentials");
    }
  }

  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData);
      setCurrentUser(currentUser);
      history.push('/');
    } catch (e) {
      setError("invalid sign up info")
    }
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
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
          <GuestLogin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/my-profile">
          <Profile />
        </Route>
        <Route path="/my-notifications">
          <Notifications />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetails />
        </Route>
        <Route exact path="/tickets">
          <Tickets />
        </Route>
        <Route exact path="/tickets/:id">
          <TicketDetails />
        </Route>
        <Route exact path="/tickets/:id/edit">
          <TicketEdit />
        </Route>
        <Route exact path="/add-ticket">
          <TicketCreate />
        </Route>
        <Route path="/manage-users">
          <ManageUsers />
        </Route>
      </Switch>
    </div>
  );
}

export default App;