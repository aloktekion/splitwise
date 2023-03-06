import React from 'react';
import { useSelector } from 'react-redux';
import Transaction from './Transaction';
import Styles from './transactionContainer.module.css';

const TransactionLog = () => {
  const groups = useSelector((reduxStore) => reduxStore.groups.group);
  // const currentUser = useSelector(
  //   (reduxStore) => reduxStore.reduce.currentUser
  // );
  const groupID = useSelector((reduxStore) => reduxStore.groups.group_id);

  // console.log(groups[groupID]);

  return (
    <div className={Styles.transaction_container}>
      <h1>Transactions:</h1>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Paid By</th>
          <th>Split Among</th>
        </tr>

        {groups?.[groupID]?.transaction.map((element, index) => (
          <Transaction key={index} transaction={element} />
        ))}
      </table>
    </div>
  );
};

export default TransactionLog;
