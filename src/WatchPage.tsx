import React, { useEffect, useState } from 'react'

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useParams } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
import { Box ,Text,HStack} from '@chakra-ui/react';
import { movieOptionsApi } from './Utils/firebase';
import { useDispatch,useSelector } from 'react-redux';
import { addwatchVideo } from './Redux/Slice/watchVideoSlice';

import Header from './Header';
import useUserAuth from './Hooks/useUserAuth';
import Loader from './Loader';

interface Genres{
  id:number,
  name:string
}

interface VideoDesc {
  title:string,
  overview:string,
  vote_average:string,
  genres:Genres[],
  release_date:string,
  tagline:string
}
const WatchPage = () => {

  const params = useParams();
  const [isLoading,setIsLoading] = useState<boolean>(false);
  useUserAuth();
  const dispatch = useDispatch();
  
 
  const [videoDesc,setVideoDesc] = useState<null|VideoDesc>(null);
  const videoId = useSelector((state:any)=>state?.watchVideo?.data);
   
   const fetchVideoInfo = async()=>{
    dispatch(addwatchVideo(null))
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,movieOptionsApi)

    const json = await res.json();
    const data = json?.results;

     const videoId = data?.filter((item:any)=>item?.type==="Trailer")
    //  console.log(videoId[0]?.key)



    dispatch(addwatchVideo(videoId[0].key))
    
   }
   

   const fetchVideoDesc = async()=>{
    setIsLoading(true);
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,movieOptionsApi);
    const json = await res.json();
    console.log(json);
    setVideoDesc(json);
    setIsLoading(false);

   }

  useEffect(()=>{
    fetchVideoInfo();
    fetchVideoDesc();


     
   

  },[])


  if(isLoading===true){
    return <Loader/>
  }

  return (
    <>

    <Box h={"100vh"} w={"100%"}>
    <Box w={"100%"} minH={"100vh"} pb={"10px"} bgColor={"black"} color={"white"}>

      <Header/>
    
  {videoId!==null?<VideoPlayer   />:<Box><Text fontSize={"24px"} fontWeight={"bold"}>Video Not Found !</Text></Box>} 

  {videoDesc&&<Box ml={"5px"} my={"30px"}  >
    <Text fontSize={"2xl"} fontWeight={"bold"}>{videoDesc.title.toUpperCase()}</Text>

    <Text my={"10px"} display={"flex"}> {videoDesc.overview} </Text>
    <Text display={"flex"} my={"10px"}> <Text fontWeight={"bold"} mr={"10px"}>RATING : </Text> {videoDesc.vote_average} ⭐</Text>
    <Text display={"flex"} my={"10px"}> <Text fontWeight={"bold"} mr={"10px"}>TAGLINE: </Text> {videoDesc.tagline} </Text>

    <Text display={"flex"} my={"10px"}> <Text fontWeight={"bold"} mr={"10px"}>REALEASE DATE: </Text> {videoDesc.release_date} </Text>

    <HStack my={"10px"}>

      <Text fontWeight={"bold"}>GENRES : </Text>
    {videoDesc.genres.map((genre)=>{
      return <Text key={genre.id} >{genre.name},</Text>
    })} 
    </HStack>
  
  </Box>}
  

   </Box>


   </Box>


   </>

  )
}

export default WatchPage