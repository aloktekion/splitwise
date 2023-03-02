// const validEmail = new RegExp('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i');
const validatePerson = (password, cpassword, alluser, username, email) => {
  let message = '';
  const user = alluser?.find((x) => x.userName === username);
  // cconsole.log(username);
  if (user) {
    message = 'Username already exist';
    return message;
  }
  if (password !== cpassword) {
    message = "password didn't match";
    return message;
  }
  console.log(email);
  // if (!validEmail.test(email)) {

  //   message = 'Email not matched';
  //   return message;
  // }

  return message;
};

const validateLoginUser = (email, password, alluser) => {
  let message = '';
  const user = alluser.find(
    (x) => x.email === email && x.password === password
  );

  if (!user) {
    message = 'Unregistered User';
    return message;
  }
  return message;
};

export { validatePerson, validateLoginUser };
