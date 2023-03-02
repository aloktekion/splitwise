import { ActionTypes } from '../constant/authTypes';

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')),
  alluser: JSON.parse(localStorage.getItem('userDetails')),
};

const authReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      onLogin(newState, action);
      return newState;
    case ActionTypes.LOGOUT:
      onLogout(newState, action);
      return newState;
    case ActionTypes.SIGN_UP:
      onSingup(newState, action);
      return newState;
    default:
      return newState;
  }
};

const onLogin = (newState, action) => {
  const { email, password } = action.payload;

  const registeredUsers = JSON.parse(localStorage.getItem('userDetails'));
  // console.log(registeredUsers);
  const registeredUser = registeredUsers.find((x) => {
    return x.email === email && x.password === password;
  });

  if (registeredUser) {
    newState.currentUser = registeredUser;
    localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
  }
};

const onLogout = (state, action) => {
  state.currentUser = null;
  localStorage.setItem('currentUser', null);
};

const onSingup = (state, action) => {
  const user = action.payload;
  const registeredUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
  registeredUsers.push(user);

  localStorage.setItem('userDetails', JSON.stringify(registeredUsers));
  state.alluser = registeredUsers;
};
export default authReducer;
