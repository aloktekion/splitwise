import React, { useState } from 'react';
import Transaction from './transactionContainerComponents/transactionDisplay/Transaction';
import AddExpense from './transactionContainerComponents/expense/AddExpense';
import Expense from './transactionContainerComponents/expense/Expense';
import AddFriend from './transactionContainerComponents/friend/AddFriend';
import Friend from './transactionContainerComponents/friend/Friend';

const Middle = () => {
  const [expenseIsOpen, setExpenseIsOpen] = useState(false);
  const [friendIsOpen, setFriendIsOpen] = useState(false);

  return (
    <div className='grow1'>
      <Transaction />
      <AddExpense setExpenseIsOpen={setExpenseIsOpen} />
      <Expense
        expenseIsOpen={expenseIsOpen}
        setExpenseIsOpen={setExpenseIsOpen}
      />
      <AddFriend setFriendIsOpen={setFriendIsOpen} />
      <Friend friendIsOpen={friendIsOpen} setFriendIsOpen={setFriendIsOpen} />
    </div>
  );
};

export default Middle;
