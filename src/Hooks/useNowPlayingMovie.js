import React, { useEffect } from 'react'
import { movieOptionsApi } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addVideo } from '../Redux/Slice/mainVideoSlice';
import { addMovie } from '../Redux/Slice/movieSlice';


const useNowPlayingMovie = () => {
 const dispatch = useDispatch();
    const fetchMovieVideo = async(id)=>{
        console.log("I am in Video")
     const res  = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,movieOptionsApi)
     const json = await res.json();
     const video = json.results.filter((item)=>item.type==="Trailer");
     const videoLink = video[0]?.key;
    //  console.log(videoLink);

     return videoLink;
     
    //  console.log(json)
    
  
    }
 const fetchMovie = async()=>{
   const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',movieOptionsApi);
   const json = await res.json()
//    console.log(json.results);
   dispatch(addMovie(json.results))
 

    // fetchMovieVideo(json.results[0].id);
    var randomNumber = (Math.random() * 20 ).toFixed();
    
    // console.log(json?.results[randomNumber])
    const {title,overview,id} = json?.results[randomNumber];

    
    const videoLink =  await fetchMovieVideo(json?.results[randomNumber]?.id);
    // console.log(videoLink)
    dispatch(addVideo({
        id,
       title,
       overview,
       videoLink

    }))


   
 }
 useEffect(()=>{
fetchMovie();


 },[])
}

export default useNowPlayingMovie