import React from 'react';

const AddFriend = ({ setFriendIsOpen }) => {
  function openloginModal() {
    setFriendIsOpen(true);
  }

  return (
    <button className='btn' onClick={openloginModal}>
      <li>Add Friend</li>
    </button>
  );
};
export default AddFriend;
