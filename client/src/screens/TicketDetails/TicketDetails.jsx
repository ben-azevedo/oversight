import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './TicketDetails.css';

function TicketDetails(props) {
  const { currentUser, onChange, handleDelete } = props;

  return (
    <Layout onChange={ onChange } currentUser={currentUser}>
      <Link to={`/foods/${food.id}/edit`}><button>edit</button></Link>
      <button onClick={() => handleDelete(food.id)}>delete</button>
    </Layout>
  );
}

export default TicketDetails;