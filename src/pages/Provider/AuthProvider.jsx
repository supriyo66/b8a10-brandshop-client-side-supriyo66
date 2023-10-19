 import  { createContext, useEffect, useState} from 'react';
 import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

 const auth = getAuth(app)

 export const AuthContext=createContext(null)

 const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

     const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     }

     const logOut=()=>{
        return signOut(auth)
     }

     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser)
            console.log('fhfg', currentUser)
        
            // setLoading(false)
  
         }))
          return ()=> unSubscribe();
      },[])
  

    const userInfo={
        user,loading,createUser,signInUser,logOut
    }
     return (
         
             <AuthContext.Provider value={userInfo}>
                 {children}
            </AuthContext.Provider>
         
    );
};
 export default AuthProvider;