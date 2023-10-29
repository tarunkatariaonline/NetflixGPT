import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import MovieSlider from './MovieSlider'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movie = useSelector((state:any)=>state.movie.data);
  const popularMovies = useSelector((state:any)=>state.popularMovies.data);
  const topRatedMovies = useSelector((state:any)=>state.topRatedMovies.data);
  // console.log("Popular Movies")
  // console.log(popularMovies)
  // console.log("Movie Data")
  // console.log(movie)
  
  return (
   <Box w={"100%"} h={"130vh"}  bgColor={"black"} color={"yellow"}>
     
     <Box  w={"100%"} h={"100vh"} position={"relative"} zIndex={12} top={"-30%"} bgColor={"blackAlpha.100"}>
  
   {movie&&<MovieSlider title={"Tranding Movies"} movie={movie} />}
   {popularMovies&&<MovieSlider title={"Popular Movies "} movie={popularMovies} />}
   {topRatedMovies&&<MovieSlider title={"Top Rated Movies"} movie={topRatedMovies} />}
 
   
     </Box>
   </Box>
  )
}

export default SecondContainer