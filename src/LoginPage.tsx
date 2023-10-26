import { Box, Stack ,HStack,Text, Input, Button} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Header from './Header'
import validation from './Utils/validation';


const LoginPage = () => {
  const [isLoginEnable,setIsLoginEnable] = useState<boolean>(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const displayName = useRef<HTMLInputElement>(null);
  const [validationErrorMessage,setValidationErrorMessage] = useState<string|null>(null);

  const handleSignInAndSignUp = ()=>{
  
  //   console.log(email.current?.value)
  //   console.log(password.current?.value)
  //  console.log(displayName.current?.value)

  if(isLoginEnable){
   // when you want to sign in 
  }else{
   //when you want to  sign up
  
   let displayNameLen:string|undefined = displayName.current?.value

   if((displayNameLen===undefined)){
     displayNameLen ="";
   }

   if(displayNameLen.length<4){
    setValidationErrorMessage("Name Should Contains More Than 8 Characters.")
    return ;
   }

  
   const message:string|null = validation(email.current?.value,password.current?.value)
   console.log(message)
   setValidationErrorMessage(message)

   if(message){
    return ;
   }


   //yaha se asli code write karenge
   console.log("Everything is Fine.")


  }


   
  }
  return (
    <Box w={"100%"} height={"100vh"} opacity={"1"} bgColor={"red"} bgImage={"https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"} bgPos={"center"} bgSize={"cover"} bgRepeat={"no-repeat"} >
     
     {/* Header Component*/}
     <Header/>

     {/* form component*/}

      <HStack w={"100%"} h={"88%"} alignItems={"center"} justifyContent={"center"}>
     <Stack minH={"250px"} py={"30px"} w={["95%","400px"]} bgColor={"blackAlpha.800"} justifyContent={"center"} alignItems={"center"} >

      
       
       <Stack minH={"250px"} w={["88%","350px"]}  >
        <Text color={"white"} fontSize={"3xl"} fontWeight={"semibold"}>{(isLoginEnable)?"Sign In":"Sign Up"}</Text>
        
       {(!isLoginEnable)&&<Input w={"100%"} ref={displayName} placeholder='Enter Your Name ' my={"10px"} border={"0px"} color={"white"} bgColor={"gray.700"} borderRadius={"0px"}/>} 
       
        <Input w={"100%"} type="email" isRequired={true} ref={email} placeholder='Enter Your Email ' my={"10px"} border={"0px"} color={"white"} bgColor={"gray.700"} borderRadius={"0px"}/>
        
        <Input w={"100%"} type="password" ref={password} placeholder='Enter Your Password ' my={"10px"} border={"0px"} color={"white"} bgColor={"gray.700"} borderRadius={"0px"}/>

         <Text color={"red.400"} fontWeight={"bold"}>{(!validationErrorMessage===null)?"":validationErrorMessage}</Text>
        <Button my={"10px"} type="submit" onClick={handleSignInAndSignUp} bgColor={"red"} css={":hover{color:black}"} color={"white"}>{(isLoginEnable)?"Sign In":"Sign Up"}</Button>
     
       <Text color={"white"} display={"flex"}>{isLoginEnable?"New To Netflix ?":""}<Text  cursor={"pointer"} color={"gray.300"} mx={"10px"} css={":hover{border-bottom:1px solid white}"} onClick={()=>{
        if(isLoginEnable){
          setIsLoginEnable(false);
          setValidationErrorMessage(null);
        }else{
          setIsLoginEnable(true);
          setValidationErrorMessage(null)
        }
       }}>{(isLoginEnable)?"Sign Up Now ":"Sign In Now"}</Text> </Text>
       
       </Stack>
  
       
     </Stack>
     </HStack>
    </Box>
  )
}

export default LoginPage