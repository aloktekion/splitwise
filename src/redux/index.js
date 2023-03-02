import { combineReducers } from 'redux';
import authReducer from './auth/reducer/authReducer';
import transactionReducer from './transaction/transactionReducer';

const reducers = combineReducers({
  reduce: authReducer,
  transaction: transactionReducer,
});

export default reducers;
