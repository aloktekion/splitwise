import React from 'react';
import { useSelector } from 'react-redux';
import BalanceSheet from './components/balanceSheet/BalanceSheet';
import { filterTransactions } from './helper/helper';
import Styles from './summary.module.css';

const Summary = () => {
  const currentUser = useSelector(
    (reduxStore) => reduxStore.reduce.currentUser
  );
  const groups = useSelector((reduxStore) => reduxStore.groups.group);
  const groupID = useSelector((reduxStore) => reduxStore.groups.group_id);

  // console.log(groupID);
  // console.log(groups);
  const filterTransaction = groups[groupID]?.transaction.filter(
    filterTransactions(currentUser)
  );
  // console.log(filterTransaction);
  const total = filterTransaction?.reduce((total, current) => {
    return total + Number(current.amount);
  }, 0);
  // console.log(total);

  const record = {};

  filterTransaction?.forEach((transaction) => {
    const splitAmongCount = transaction.PaidFor.length;
    const splittedAmount = transaction.amount / splitAmongCount;

    if (transaction.Paidby[0] === currentUser.name) {
      transaction.PaidFor?.forEach((user) => {
        if (user !== currentUser.name) {
          if (record[user] !== undefined) {
            record[user] -= splittedAmount;
          } else {
            record[user] = -splittedAmount;
          }
        }
      });
    } else {
      const user = transaction.Paidby[0];
      if (record[user]) {
        record[user] += splittedAmount;
      } else {
        record[user] = splittedAmount;
      }
    }
  });

  let youOwe = Object.values(record).reduce(
    (total, currentValue) => (total += Math.max(0, currentValue)),
    0
  );
  let youAreOwed = Object.values(record).reduce(
    (total, currentValue) => (total += Math.abs(Math.min(0, currentValue))),
    0
  );

  return (
    <div className={Styles.Summary_container}>
      <div className={Styles.balanceSheet}>
        <BalanceSheet desc={'TotalBalance'} amount={total} />
        <BalanceSheet desc={'You Owe'} amount={`₹${youOwe.toFixed(2)}`} />
        <BalanceSheet
          desc={'You are owed'}
          amount={` ₹${youAreOwed.toFixed(2)}`}
        />
      </div>
      <div className={Styles.SummaryBox}>
        <h1>Summary: </h1>
        <table>
          {Object.entries(record).map(([user, amount]) =>
            amount === 0 ? null : (
              <tr>
                <td>
                  {amount > 0 ? `You owe ${user} ₹` : `${user} owes you ₹`}
                  {Math.abs(amount.toFixed(2))}
                </td>
              </tr>
            )
          )}
        </table>
      </div>
    </div>
  );
};

export default Summary;
