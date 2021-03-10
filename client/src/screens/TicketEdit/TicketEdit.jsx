import Layout from '../../components/shared/Layout/Layout';
import { Link } from 'react-router-dom';
import './TicketEdit.css';

function TicketEdit(props) {
  const { user, onChange } = props;

  return (
    <Layout onChange={ onChange } user={props.user}>
      
    </Layout>
  );
}

export default TicketEdit;