import { createContext, useState } from "react";
//ContextApi
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const x = 3000;
  const login = () => {
    const timer = setTimeout(() => {
      setUser({ name: "anandhu", email: "anandhu@gmail.com" });
    }, x);

    return () => clearTimeout(timer);
  };

  const logout = () => setUser(null);
  const contextValue = {
    user,
    login,
    logout,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
