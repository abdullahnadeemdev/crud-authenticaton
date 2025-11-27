import { is_Login } from "../../../utils/mockUpData";
import { is_LogOut } from "../../../utils/mockUpData";

export const loginTrue = (data) => {
  return {
    type: is_Login,
    data: data,
  };
};
export const loginFalse = (data) => {
  return { type: is_LogOut, data: data };
};
