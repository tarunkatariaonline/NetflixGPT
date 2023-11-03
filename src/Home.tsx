import { Box } from '@chakra-ui/react'
import React from 'react'
import { firebaseConfig } from './Utils/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDetails } from './Redux/Slice/userInfoSlice';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import { MainContainer } from './MainContainer';
import SecondContainer from './SecondContainer';
import useNowPlayingMovie from './Hooks/useNowPlayingMovie';
import usePopularMovies from './Hooks/usePopularMovies';
import useTopRatedMovies from './Hooks/useTopRatedMovies';
import SearchGptPage from './SearchGptPage';
import Loader from './Loader';
import useUserAuth from './Hooks/useUserAuth';
const Home = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const analytics = getAnalytics(app);
  const dispatch = useDispatch();
  const navicate = useNavigate()
  useUserAuth();
  useNowPlayingMovie()
  usePopularMovies();
  useTopRatedMovies();
  // const showGpt = useSelector((state:any)=>state.showGptPage.value)
  const videoInfo = useSelector((state:any)=>state?.mainVideo?.data);
  // console.log(showGpt)

 
    
   

  if(videoInfo===null){
    return <Loader/>
  }
  return (

<>
<Box w={"100%"} h={"100vh"} bgColor={"black"} >
      <Box pos={"absolute"} top={"0px"} w={"100%"} zIndex={10}>
  <Header/>
  </Box>
  <MainContainer/>
  <SecondContainer/>
    </Box>
    
    </>  
  )
}

export default Home