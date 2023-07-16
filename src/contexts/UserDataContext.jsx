import { useState, createContext } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const lsToken = localStorage.getItem("token");
  const [token, setToken] = useState(lsToken);

  return (
    <UserDataContext.Provider value={{ token, setToken, lsToken }}>
      {children}
    </UserDataContext.Provider>
  )
}
