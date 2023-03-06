import React from 'react';

const AddExpense = ({ setFriendIsOpen }) => {
  const openfriendModal = () => {
    setFriendIsOpen(true);
  };

  return (
    <button className='btn' onClick={openfriendModal}>
      Add Friend
    </button>
  );
};
export default AddExpense;
