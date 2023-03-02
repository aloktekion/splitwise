import { ActionTypes } from '../constant/authTypes';

export const authAction = (email, password) => {
  return {
    type: ActionTypes.SIGN_IN,
    payload: {
      email,
      password,
    },
  };
};

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

export const signup = (
  userName,
  name,
  email,
  password,
  shareAmount,
  totalPaidAmount
) => {
  return {
    type: ActionTypes.SIGN_UP,
    payload: {
      userName,
      name,
      email,
      password,
    },
  };
};
