import { TransactionActionTypes } from './transactionTypes';

export const addExpense = (amount, description, Paidby, PaidFor) => {
  return {
    type: TransactionActionTypes.ADD_EXPENSE,
    payload: {
      amount,
      description,
      Paidby,
      PaidFor,
    },
  };
};
