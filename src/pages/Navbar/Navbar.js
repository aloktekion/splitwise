import React from 'react';
import LoginSignUp from './LoginSignUp';
// import UserPro from './UserPro';

const Navbar = ({ setLoginIsOpen, setSignUpIsOpen }) => {
  return (
    <div>
      <div className='navbar'>
        <i className='bi bi-pie-chart-fill'></i>
        <LoginSignUp
          setLoginIsOpen={setLoginIsOpen}
          setSignUpIsOpen={setSignUpIsOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
