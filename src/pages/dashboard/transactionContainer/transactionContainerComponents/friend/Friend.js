import React, { useState } from 'react';
import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { background: 'rgba(0, 0, 0, 0.4)' },
};

const Friend = ({ friendIsOpen, setFriendIsOpen }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const user = JSON.parse(localStorage.getItem('userDetails'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // console.log(currentUser);
  const handleSubmit = () => {
    const search = user.find((x) => {
      return x.email === email;
    });
    console.log(search);
    // if (search === undefined) {
    //   currentUser.friend.push(name);
    // } else {
    //   currentUser.friend.push(search.name);
    // }
    currentUser.friend.push(name);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    console.log(currentUser);
  };

  // const navigate = useNavigate();
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setFriendIsOpen(false);
  }
  return (
    <Modal
      isOpen={friendIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='login'>
        <i className='bi bi-person-square'></i>
        <h1>Friend Here !</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email Address *'
          required
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='name *'
          required
        />
        <button onClick={handleSubmit}>Friend</button>
        {/* <navigate> Don't have account</navigate> */}
      </div>
    </Modal>
  );
};

export default Friend;
