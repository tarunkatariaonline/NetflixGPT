import React, { useEffect } from 'react'
import { movieOptionsApi } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addpopularMovie } from '../Redux/Slice/popularMovieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch()
   const fetchPopularMovies = async()=>{
   
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',movieOptionsApi);
    const json = await res.json();
    console.log(json.results)
    dispatch(addpopularMovie(json.results))
    

   }
    useEffect(()=>{
       fetchPopularMovies();
    },[])
}

export default usePopularMovies