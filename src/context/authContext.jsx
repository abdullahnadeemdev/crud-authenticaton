import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({ auth: false, setAuth: () => {} });

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvide = (props) => {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
