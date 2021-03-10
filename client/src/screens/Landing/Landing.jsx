import './Landing.css';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-black.png";

function Landing(props) {
  return (
    <div className="landing">
      <div className="landing-container">
        <img className="logo" src={logo} />
        <Link to="/sign-in">
          <div className="login-button"> CLICK TO START </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;