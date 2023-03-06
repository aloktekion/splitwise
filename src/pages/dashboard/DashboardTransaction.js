import React, { useState } from 'react';
import TransactionLog from './components/transactionLog/TransactionLog';
import AddExpense from './components/expense/AddExpense';
import Expense from './components/modals/Expense';
import AddFriend from './components/friend/AddFriend';
import Friend from './components/modals/Friend';
import styles from './transaction.module.css';

const Middle = () => {
  const [expenseIsOpen, setExpenseIsOpen] = useState(false);
  const [friendIsOpen, setFriendIsOpen] = useState(false);

  return (
    <div className={styles.transactionBox}>
      <TransactionLog />
      <div className={styles.btn}>
        <AddExpense setExpenseIsOpen={setExpenseIsOpen} />
        <Expense
          expenseIsOpen={expenseIsOpen}
          setExpenseIsOpen={setExpenseIsOpen}
        />
        <AddFriend setFriendIsOpen={setFriendIsOpen} />
        <Friend friendIsOpen={friendIsOpen} setFriendIsOpen={setFriendIsOpen} />
      </div>
    </div>
  );
};

export default Middle;
