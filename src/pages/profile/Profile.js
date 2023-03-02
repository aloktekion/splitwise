import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import LeftSidebar from '../dashboard/sidebar/LeftSidebar';
import Styles from './profile.module.css';

const Profile = () => {
  const currentUser = useSelector(
    (reduxStore) => reduxStore.reduce.currentUser
  );

  return (
    <>
      <div className='layout'>
        <div className='boxes'>
          <LeftSidebar />
          <div className={Styles.profile}>
            <div className={Styles.profile_container}>
              <table>
                <tr>
                  <td>
                    <h2>Name : {currentUser?.name}</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Email : {currentUser?.email}</h3>
                  </td>
                </tr>
              </table>
              {/* <button className={Styles.btn}>Go Back</button> */}
            </div>
            {/* <NavLink to='/home' className={Styles}>
              Go Back
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
