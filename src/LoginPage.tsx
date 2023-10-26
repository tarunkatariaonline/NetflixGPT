import { Box, Stack ,HStack,Text, Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from './Header'


const LoginPage = () => {
  const [isLoginEnable,setIsLoginEnable] = useState(true);
  return (
    <Box w={"100%"} height={"100vh"} opacity={"1"} bgColor={"red"} bgImage={"https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"} bgPos={"center"} bgSize={"cover"} bgRepeat={"no-repeat"} >
     
     {/* Header Component*/}
     <Header/>

     {/* form component*/}

      <HStack w={"100%"} h={"88%"} alignItems={"center"} justifyContent={"center"}>
     <Stack h={"450px"} w={["95%","400px"]} bgColor={"blackAlpha.800"} justifyContent={"center"} alignItems={"center"} >
       
       <Stack h={"400px"} w={["98%","350px"]} >
        <Text color={"white"} fontSize={"3xl"} fontWeight={"semibold"}>{(isLoginEnable)?"Sign In":"Sign Up"}</Text>

       {(!isLoginEnable)&&<Input w={"100%"} placeholder='Enter Your Name ' my={"10px"} border={"0px"} color={"white"} bgColor={"gray.700"} borderRadius={"0px"}/>} 
        <Input w={"100%"} placeholder='Enter Your Email ' my={"10px"} border={"0px"} color={"white"} bgColor={"gray.700"} borderRadius={"0px"}/>
        
        <Input w={"100%"} placeholder='Enter Your Password ' my={"10px"} border={"0px"} color={"white"} bgColor={"gray.700"} borderRadius={"0px"}/>

        <Button my={"10px"} bgColor={"red"} css={":hover{color:black}"} color={"white"}>{(isLoginEnable)?"Sign In":"Sign Up"}</Button>
     
       <Text color={"white"} display={"flex"}>New To Netflix ?<Text  cursor={"pointer"} color={"gray.300"} mx={"10px"} css={":hover{border-bottom:1px solid white}"} onClick={()=>{
        if(isLoginEnable){
          setIsLoginEnable(false);
        }else{
          setIsLoginEnable(true);
        }
       }}>Sign Up Now</Text> </Text>
        
       </Stack>
       
       
     </Stack>
     </HStack>
    </Box>
  )
}

export default LoginPage