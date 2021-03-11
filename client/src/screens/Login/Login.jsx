import './Login.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-black.png";

function Landing(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin, error } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="landing">
      <div className="landing-container">
        <img className="logo" src={logo} />
        <div className="subhead">LOGIN</div>
        <form
          className="auth-form"
          onSubmit={
            (e) => {
              e.preventDefault();
              handleLogin(formData);
            }
          }>
          {
            error &&
            <p>{error}</p>
          }
          <input
            className="login-input"
            placeholder='username'
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
          <br/>
          <input
            style={{ marginTop: "-20px"}}
            className="login-input"
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleChange}
          />
          <br/>
          <button className="login-button" style={{ marginTop: "-19px"}}>SUBMIT</button>
        </form>
        <div className="other-login-links">
          <div>Create an account? <Link to="/sign-up" className="decoration-link">Sign Up</Link></div>
          <br></br>
          <div>Sign in as a <Link to="/guest-sign-in" className="decoration-link">Guest</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;