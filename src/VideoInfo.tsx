import { Box,Button,HStack,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillInfoCircle, AiFillPlayCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
const VideoInfo = () => {
  const videoInfo = useSelector((state:any)=>state?.mainVideo?.data);
  
  return (


    
   <Box pos={"absolute"} display={"flex"}  alignItems={"center"}  top={"0%"} bgColor={"blackAlpha.700"}  left={"0%"} bottom={"0%"} right={"0%"} zIndex={15}>
    <VStack justifyContent={"flex-start"} alignItems={["flex-start"]}>
        <Text mx={"20px"} color={"white"} fontSize={["25px","25px","25px","30px"]} fontWeight={"bold"}>{(videoInfo?.title)}</Text>
        <Text mx={"20px"} color={"white"} display={["none","block"]} maxH={"150px"} overflow={"hidden"} w={"400px"}>{videoInfo?.overview}</Text>

        <HStack >
          <Link to={'/video/watch/'+videoInfo?.id} > <Button  mx={"20px"} size={["sm","md"]} px={"20px"}>PLAY <Text mx={"5px"}> <AiFillPlayCircle fontSize={"20px"} /> </Text></Button> </Link> 
           <Link to={'/video/watch/'+videoInfo?.id}> <Button  size={["sm","md"]} mx={"0px"} css={":hover{color:black}"} bgColor={"whiteAlpha.300"} color={"white"} px={"20px"}>MORE<Text mx={"5px"}> <AiFillInfoCircle fontSize={"20px"} /> </Text></Button></Link>
        </HStack>
    </VStack>
   </Box>
   
  )
}

export default VideoInfo