import React, { useEffect } from 'react'
import { movieOptionsApi } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addtopRatedMovie } from '../Redux/Slice/topRatedMovieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const fetchTopRatedMovies = async()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',movieOptionsApi);
        const json = await res.json();
        console.log("Top Rated Movies :")
        console.log(json.results)
        dispatch(addtopRatedMovie(json.results));
        
    }
    useEffect(()=>{
      fetchTopRatedMovies();
    })
}

export default useTopRatedMovies