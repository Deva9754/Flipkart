const checkValidationdata = (email, password) => {
  const isEmailValidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordvalidate =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!isEmailValidate) return " Invalid Email, please enter valid id";
  if (!isPasswordvalidate) return "Invalid Password";
  return null;
};
export default checkValidationdata;
