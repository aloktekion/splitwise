import React from 'react';

const AddExpense = ({ setExpenseIsOpen }) => {
  function openloginModal() {
    setExpenseIsOpen(true);
  }

  return (
    <button className='btn' onClick={openloginModal}>
      <li>Add Expense</li>
    </button>
  );
};
export default AddExpense;
