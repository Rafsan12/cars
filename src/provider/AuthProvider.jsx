/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../context";
import { app } from "../firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const userWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    loading,
    userWithEmailAndPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
