import { Box } from '@chakra-ui/react'
import React from 'react'
import VideoInfo from './VideoInfo'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const videoInfo = useSelector((state:any)=>state?.mainVideo?.data);
  console.log(videoInfo)
  
  return (
   <Box w={"100%"}  zIndex={1} position={"relative"} bgColor={"yellow"}  paddingBottom={"56.25%"} >
     <VideoInfo/>
     <iframe  style={{position:"absolute",height:"100%",width:"100%",left:"0%",top:"0%",zIndex:3}}    src={`https://www.youtube.com/embed/${videoInfo?.videoLink}?si=KB2FbFwzhWK6VOCw?si=SVMoqgZlVQNyx27b&autoplay=1&mute=1&controls=0&frameborder=0&loop=1`}  
     title='youtube video player' allow="accelerometer; autoplay  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowFullScreen></iframe>
   </Box>
  )
}

export default VideoContainer