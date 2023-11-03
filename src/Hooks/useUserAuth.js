import React, { useEffect } from 'react'
import { firebaseConfig } from '../Utils/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDetails } from '../Redux/Slice/userInfoSlice';
import { useNavigate } from 'react-router-dom';
const useUserAuth = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth()
    const analytics = getAnalytics(app);
    const dispatch = useDispatch();
    const navicate = useNavigate()

  useEffect(()=>{
 
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const obj={
            displayName:(user.displayName),
            email:(user.email),
            uid:(user.uid),
            photoURL:(user.photoURL)
          }
        
          dispatch(addUserDetails(obj));
          // navicate('/browse')
          // ...
  
      
        }else{
          //if user is not sign in 
          navicate('/')
        } 
      });
  },[])
}

export default useUserAuth