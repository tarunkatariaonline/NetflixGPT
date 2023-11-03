import { Box, HStack } from '@chakra-ui/react';
import React, { useRef ,useEffect} from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-logo';
import 'videojs-youtube';
import { useSelector } from 'react-redux';



const VideoPlayer = () => {
    const videoId = useSelector((state:any)=>state?.watchVideo?.data);
    console.log("Video Info is here/")
    console.log(videoId)

          
  
       
  return (

 <>
 <Box w={"100%"} h={["30vh","85vh"]} bgColor={"black"}  >

 <iframe   height={"100%"} width={"100%"}   src={"https://www.youtube.com/embed/"+videoId+"?si=SVMoqgZlVQNyx27b&autoplay=1&mute=0&controls=1&frameborder=0&loop=1&rel=0&showinfo=0&modestbranding=1"}  
     title='youtube video player' allow="accelerometer; autoplay  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>

 </Box>
 </>
  )
}

export default VideoPlayer