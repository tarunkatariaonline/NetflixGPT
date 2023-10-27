import { Box } from '@chakra-ui/react'
import React from 'react'
import { firebaseConfig } from './Utils/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUserDetails } from './Redux/Slice/userInfoSlice';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import { MainContainer } from './MainContainer';
import SecondContainer from './SecondContainer';
import useNowPlayingMovie from './Hooks/useNowPlayingMovie';
const Home = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const analytics = getAnalytics(app);
  const dispatch = useDispatch();
  const navicate = useNavigate()
  useNowPlayingMovie()
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
  return (
    
    <Box w={"100%"} h={"100vh"} bgColor={"white"} >
      <Box pos={"absolute"} top={"0px"} w={"100%"} zIndex={10}>
  <Header/>
  </Box>
  <MainContainer/>
  <SecondContainer/>
    </Box>
  )
}

export default Home