import { TransactionActionTypes } from './transactionTypes';

const initialTransactionState =
  JSON.parse(localStorage.getItem('transactionDetails')) || [];

const transactionReducer = (state = initialTransactionState, action) => {
  const newState = state.slice();
  switch (action.type) {
    case TransactionActionTypes.ADD_EXPENSE:
      addexpense(newState, action);
      return newState;

    default:
      return newState;
  }
};

const addexpense = (state, action) => {
  state.push(action.payload);

  // action.payload.PaidFor.forEach((element) => {
  //   console.log(element);
  // });
  localStorage.setItem('transactionDetails', JSON.stringify(state));
};

export default transactionReducer;
