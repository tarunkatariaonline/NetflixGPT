import { Box ,Text,HStack} from '@chakra-ui/react'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
interface MovieData{
    id:number,
    original_title:string,
    poster_path:string|null,
    overview:string,
    title:string,
    popularity:string,
    vote_average:string,
    backdrop_path:string

}
interface Props{
    title:string,
    movie:MovieData[]
}


const MovieSlider = ({title,movie}:Props) => {
    // console.log("I am in Movie Slider")
    // console.log(movie)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
  return (
    <Box w={"100%"} >

        <Text color={"white"} fontSize={"2xl"} py={"10px"}  mx={"10px"}>{title}</Text>
        
      
        <Carousel responsive={responsive} >
       
      
      
       
       
       {movie.map((item)=>{
        return  (item.poster_path&& <Link key={item.id}  to={'/video/watch/'+item.id}><Box cursor={"pointer"} css={":hover{border:2px solid red}"}  zIndex={25} mx={"10px"} bgImage={"https://image.tmdb.org/t/p/original/"+item.poster_path} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}   my={"20px"} w={["120px","140px"]} h={["200px"]} bgColor={"gray"}></Box>
        
        </Link>) 
       })}
      
       
       

        
</Carousel>

    </Box>
  )
}

export default MovieSlider