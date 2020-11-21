import { createContext, useState, useContext } from "react";
import { API_TOKEN } from "../../constants";

export const AuthContext = createContext({
  token: "",
  setToken: () => {},
  isAuthenticated: false,
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem(API_TOKEN));
  const isAuthenticated = !!token;

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem(API_TOKEN, token);
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, setToken: handleSetToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
