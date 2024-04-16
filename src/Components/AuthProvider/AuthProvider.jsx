import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

        const registerUser = (email, password) =>{
              // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
        }
        const loginUser = (email, password) =>{
              // create user
              signInWithEmailAndPassword(auth, email, password)
              .then(result=> console.log(result.user))
        }
        
        const authInfo ={
            registerUser,
            loginUser
        }
  
    return (
        <div>
          <AuthContext.Provider value={authInfo}>  {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;