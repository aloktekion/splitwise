import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/action/authAction';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  let activeStyle = {
    textDecoration: 'none',
    color: '#01dfba',
  };

  return (
    <div className={styles.Sidebar}>
      <div className='leftSidebarUpperSection'>
        <li>
          <NavLink
            to='/home'
            className='navlink'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Transaction
          </NavLink>
        </li>
        <NavLink
          to='/summary'
          className='navlink'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Summary
        </NavLink>
        <NavLink
          to='/profile'
          className='navlink'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className='leftSidebarLowerSection'>
        <div className='mode'>
          <li>Dark Mode</li>
          <label class='switch'>
            <input type='checkbox' />
            <span class='slider round'></span>
          </label>
        </div>
        <div className='inviteFriend'>
          <li>Invite Friend</li>
          <i className='bi bi-share'></i>
        </div>
        <div className='logOut'>
          <button onClick={handleLogout}>Log Out</button>
          <i className='bi bi-box-arrow-in-right'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;