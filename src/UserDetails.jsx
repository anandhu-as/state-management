import React, { useEffect } from "react";
import { useState } from "react";
const UserDetails = () => {
  //using usestate
  const [user, setUser] = useState(null);
  const x = 3000;
  const login = () => {
    const timer = setTimeout(() => {
      setUser({ name: "anandhu", email: "anandhu@gmail.com" });
    }, x);

    return () => clearTimeout(timer);
  };

  const logout = () => setUser(null);
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
