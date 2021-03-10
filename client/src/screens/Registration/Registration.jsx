import logo from "../../images/logo-black.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Registration.css';

export default function Registration(props) {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
    permission: '',
  })
  const { username, email, password, permission } = formData;
  const { handleRegister } = props;

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
        <div className="subhead">REGISTER</div>
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <input
            className="login-input"
            placeholder='username'
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
          <br />
          <input
            style={{marginTop: "-19px"}}
            className="login-input"
            placeholder='email'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <br />
          <input
            style={{marginTop: "-19px"}}
            className="login-input"
            placeholder='password'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <br />
          <select
            onChange={handleChange}
            name="permission"
            className="login-input register-select"
          >
            <option value="" style={{textDecoration: "italic"}}disable selection hidden>permission</option>
            <option value="Administrator">Administrator</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
            <option value="Intern">Intern</option>
          </select>
          <br />
          <Link to="/sign-in">
            <button style={{marginTop: "-19px"}} className="login-button">Submit</button>
          </Link>
        </form>
        <div className="other-login-links">
          <div>Already have an account? <Link to="/sign-in" className="decoration-link">Sign In</Link></div>
          <br></br>
          <div>Sign in as a <Link to="/guest-sign-in" className="decoration-link">Guest</Link></div>
        </div>
      </div>
    </div>
  )
}