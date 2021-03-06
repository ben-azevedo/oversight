import Layout from '../../components/shared/Layout/Layout';
import maintenance from "../../images/under-maintenance.png";
import { Link } from 'react-router-dom';
import './ManageUsers.css';

function ManageUsers(props) {
  const { currentUser, onChange } = props;

  return (
    <Layout onChange={onChange} currentUser={currentUser}>
      <div>
        <img className="home-graph" src={maintenance}/>
      </div>
    </Layout>
  );
}

export default ManageUsers;