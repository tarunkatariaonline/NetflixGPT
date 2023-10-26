import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './Utils/firebase';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const navicate = useNavigate()
const auth = getAuth();
  return (
    <Box h={"70px"} w={"100%"}  bgColor={"blackAlpha.600"}  shadow={"dark-lg"} display={"flex"}  alignItems={"center"} justifyContent={"space-between"}>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' h={"50px"} mx={"10px"}/>

      <Button mx={"10px"} onClick={()=>{
        //sign out function likhna hai 
        signOut(auth).then(() => {
          // Sign-out successful.
          navicate('/')
          
        }).catch((error) => {
          // An error happened.
        });
        
      }} size={"sm"} colorScheme="red" color={"white"}>Sign Out</Button>

     
    </Box>
  )
}

export default Header