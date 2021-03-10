// import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import graph from "../../images/home-graph.png";
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
  const { user, onChange } = props;

  return (
    <Layout onChange={ onChange } user={props.user}>
      <div>
        <div className="home-header">Team Progress</div>
        <img className="home-graph" src={graph}/>
      </div>
    </Layout>
  );
}

export default Home;