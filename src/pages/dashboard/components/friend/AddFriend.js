import React from 'react';

const AddFriend = ({ setFriendIsOpen }) => {
  function openloginModal() {
    setFriendIsOpen(true);
  }

  return (
    <button className='btn' onClick={openloginModal}>
      Add Friend
    </button>
  );
};
export default AddFriend;
