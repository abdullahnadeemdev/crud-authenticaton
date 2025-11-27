const isLogin = (state = false, action) => {
  switch (action.type) {
    case "loginT":
      return (state = true);
    case "loginF":
      return (state = false);
    default:
      return state;
  }
};

export default isLogin;
