import React from 'react';
import Styles from './transactionContainer.module.css';
import DisplayTransaction from './DisplayTransaction';
import { useSelector } from 'react-redux';
const Transaction = () => {
  const allTransaction = useSelector((reduxStore) => reduxStore.transaction);

  // console.log(allTransaction);
  return (
    <div className={Styles.transaction_container}>
      <div className={Styles.transaction_container_title}>
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
    </div>
  );
};

export default Transaction;
