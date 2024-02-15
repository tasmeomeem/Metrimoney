import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] =useState(true);
    const [user, setUser] =useState(null);
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   
  };
  const LogInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = ()=>{
    return signInWithPopup(auth,googleProvider)
  }
  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observe", currentUser);
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);


  const authentication = {
    signUpWithEmailAndPassword,
    LogInWithEmailAndPassword,
    googleLogin,
    loading,
    user,
    logOut,
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
