import React, { useEffect } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import '../css/Home.css';
import Navbar from './Navbar';
import Products from './Products';
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
const Home = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
      // forcing user to signup
      auth.onAuthStateChanged(user => {
          if (!user) {
              history.push('/login');
          }
      })
  })

  return (
    <div className='wrapper'>
      <Navbar user={user} />
      <Products />
    </div>
  );
}


Home.propTypes = {
  user: PropTypes.string 
};

export default Home;
