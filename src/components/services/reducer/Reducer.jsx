import { is_Login } from "../../../utils/mockUpData";
import { is_LogOut } from "../../../utils/mockUpData";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("logIn")) || false;
  return arr;
};

const logCheck = getItem();
// console.log("logCheck", logCheck);

const initialState = {
  login: logCheck,
};

const isLogin = (state = initialState.login, action) => {
  switch (action.type) {
    case is_Login: {
      //   console.log("state Reducer", state);
      //   console.log("action Reducer", action);
      //   console.log("action Reducer data", action.data);
      return (state = true);
    }
    case is_LogOut: {
      console.log("state Reducer", state);
      console.log("action Reducer", action);
      console.log("action Reducer data", action.data);
      return (state = false);
    }
    default:
      return state;
  }
};

export default isLogin;
