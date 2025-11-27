import { is_Login } from "../../../utils/mockUpData";
import { is_LogOut } from "../../../utils/mockUpData";

const initialState = {
  login: false,
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
