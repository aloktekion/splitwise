import React from 'react';
import { useSelector } from 'react-redux';
import DisplayTransaction from './DisplayTransaction';
import Styles from './transactionContainer.module.css';

const TransactionLog = () => {
  const allTransaction = useSelector((reduxStore) => reduxStore.transaction);
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

        {allTransaction.map((_, index) => (
          <DisplayTransaction key={index} transaction={_} />
        ))}
      </table>
    </div>
  );
};

export default TransactionLog;
