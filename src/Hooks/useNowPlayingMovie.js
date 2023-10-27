import React, { useEffect } from 'react'
import { movieOptionsApi } from '../Utils/firebase';



const useNowPlayingMovie = () => {
 
    const fetchMovieVideo = async(id)=>{
        console.log("I am in Video")
     const res  = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,movieOptionsApi)
     const json = await res.json();
     const video = json.results.filter((item)=>item.type==="Trailer");
     console.log(video[0]);
     
    //  console.log(json)


    }
 const fetchMovie = async()=>{
   const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',movieOptionsApi);
   const json = await res.json()
   console.log(json.results[0].id)

    // fetchMovieVideo(json.results[0].id);
    var randomNumber = (Math.random() * 20 ).toFixed();
    
     fetchMovieVideo(json.results[randomNumber].id);

   
 }
 useEffect(()=>{
fetchMovie();


 },[])
}

export default useNowPlayingMovie