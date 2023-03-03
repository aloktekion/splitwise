import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Welcome from './welcome/Welcome';
import Dashboard from './dashboard/Transaction';
import Profile from './profile/Profile';
import Summary from './summary/Summary';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './landing.module.css';

const Landing = () => {
  const currentUser = useSelector(
    (reduxStore) => reduxStore.reduce.currentUser
  );
  //have check the currentUser works with null value or not;
  return (
    <div className={styles.landing}>
      {currentUser && <Sidebar />}
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </div>
  );
};

export default Landing;
