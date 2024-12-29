/* eslint-disable react/prop-types */
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { app } from "../firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const userWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      const userEmail = user?.email;
      const loggedUser = { email: userEmail };

      setUser(user);

      console.log("Current User : ", user);
      setLoading(false);
      if (user) {
        const response = await axios.post(
          "http://localhost:5000/jwt",
          loggedUser,
          {
            withCredentials: true,
          }
        );
        const result = response.data;
        console.log("token: ", result);
      } else {
        const response = await axios.post(
          "http://localhost:5000/logout",
          loggedUser,
          { withCredentials: true }
        );
        const result = response.data;
        console.log("Log-out: ", result);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, [auth]);
  const authInfo = {
    user,
    loading,
    userWithEmailAndPassword,
    logOut,
    CreateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
