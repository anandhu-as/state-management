import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "./Contex/Context Api/User-Context-Provider";
const UserDetails = () => {
  //useState
  //const [user, setUser] = useState(null);
  // const x = 3000;
  // const login = () => {
  //const timer = setTimeout(() => {
  // setUser({ name: "anandhu", email: "anandhu@gmail.com" });
  //}, x);

  //return () => clearTimeout(timer);
  //};

  //const logout = () => setUser(null);
  const { login, logout, user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Name:{user.name}</h1>
          <h2>Email:{user.email}</h2>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default UserDetails;
