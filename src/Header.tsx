import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './Utils/firebase';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUserDetails } from './Redux/Slice/userInfoSlice';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiDownArrow} from 'react-icons/bi'
import { setShowGptPage } from './Redux/Slice/showGptPageSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const navicate = useNavigate()
const auth = getAuth();
const dispatch = useDispatch()
const userInfo = useSelector((state:any) => (state?.userInfo?.data))
const [showDrawer,setShowDrawer] = useState(false);

const logOutHandler = ()=>{
  //sign out function likhna hai 
  signOut(auth).then(() => {
    // Sign-out successful.
    navicate('/')
    dispatch(removeUserDetails())

    
  }).catch((error) => {
    // An error happened.
  });
  
}
  return (
    <Box h={"70px"} w={"100%"}  bgColor={"blackAlpha.600"}  shadow={"dark-lg"} display={"flex"}  alignItems={"center"} justifyContent={"space-between"}>

      <HStack >
        <Link to={'/browse'}  >
      <Image src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' h={"40px"} mx={"10px"}/> </Link>

       
       {/* <HStack>
        <Button size={"md"} color={"white"} variant={"unstyled"} mx={"7px"} >Home </Button>
        <Button size={"md"} color={"white"} variant={"unstyled"} mx={"7px"} >TV Shows </Button>
        <Button size={"md"} color={"white"} variant={"unstyled"} mx={"7px"} >Movies </Button>
        <Button size={"md"} color={"white"} variant={"unstyled"} mx={"7px"} >New Popular </Button>
        <Button size={"md"} color={"white"} variant={"unstyled"} mx={"7px"} >My List </Button>


       </HStack> */}
      </HStack>




   {(userInfo)&&<HStack>
    <Link to={'/search'}>  <Button size={"sm"} display={"flex"} justifyContent={"center"} variant={"unstyled"} css={":hover{color:red}"}   color={"white"} > <AiOutlineSearch    fontSize={"26px"}/></Button></Link>
      <Button mr={"10px"} variant={"unstyled"} onClick={()=>{
        setShowDrawer(!showDrawer);
      }} >
        <HStack>
      <Image h={"30px"} src={userInfo?.photoURL}/>
       <BiDownArrow transform={(showDrawer)?'rotate(-180)':'rotate(0)'}  color='white' size={"14px"}/>
       </HStack>

       
      {showDrawer&&<Box w={"170px"}  borderRadius={"10px"} bgColor={"gray.900"} pos={"absolute"} top={"40px"} right={"15px"}>


      
        
        <Box bgColor={"red.300"} borderTopRadius={"10px"} >
        <Button w={"full"}    colorScheme="red"  color={"white"} onClick={logOutHandler} size={"sm"}>Logout
        </Button>
        </Box>
        <Box  borderBottomRadius={"10px"}>
        <Button w={"full"}  borderRadius={"10px"} colorScheme="blackAlpha"  color={"white"} onClick={logOutHandler} size={"sm"}>Account
        </Button>
        </Box>
       
        
        
     
    </Box>} 

       
      </Button>
     
     </HStack>}
     
    


     
    </Box>
  )
}

export default Header