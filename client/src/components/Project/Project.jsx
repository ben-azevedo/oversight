// import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom'

const Project = (props) => {
  const { _id, title, location, category, price, description, details, imgURL } = props;

return (
  <>
  <Link className="project" style={{ backgroundImage: `url(${imgURL[0]})`, objectFit: "cover", backgroundSize: '400px 400px', backgroundRepeat: 'no-repeat'}} to={`/projects/${_id}`}>
    <div className="project-image"></div>
    <div className="project-title">{title}</div>
      <div className="project-location">{location}</div>
      <div className="project-price">
        <i class="fa fa-rub" aria-hidden="true"></i> {price}
      </div>
  </Link>
</>
  )
}
export default Project;