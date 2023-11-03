import { Box,Text,HStack } from '@chakra-ui/react'
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
   <Box w={"100%"} minH={"40vh"}  bgColor={"black"} color={"yellow"}>
     
     <Box  w={"100%"} h={"100%"}  position={["unset","relative"]} zIndex={12} top={["60px","-30%"]} bgColor={"blackAlpha.100"} mt={["100px","100px","0px","-200px"]}>
  

   {movie&&<MovieSlider title={"Tranding Movies"} movie={movie} />}
   {popularMovies&&<MovieSlider title={"Popular Movies "} movie={popularMovies} />}
   {topRatedMovies&&<MovieSlider title={"Top Rated Movies"} movie={topRatedMovies} />}



   {/* <HStack justifyContent={"center"}   alignItems={"center"}>
    <Text  color={"white"} bgColor={""} >Developed By Tarun Kataria With ❤ </Text>
    </HStack> */}


 
   
     </Box>
   </Box>
  )
}

export default SecondContainer