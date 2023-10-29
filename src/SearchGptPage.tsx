import React, { useState } from 'react'
import { Box, Input ,HStack, Button, Image,VStack,Spinner,Text} from '@chakra-ui/react'
import Header from './Header'
import OpenAI from 'openai';
import { json } from 'react-router-dom';
import { movieOptionsApi } from './Utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestionMovies } from './Redux/Slice/showGptPageSlice';
import MovieSlider from './MovieSlider';
import Loader from './Loader';
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPEN_AI_API_KEY, 
    // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true 
  });
const SearchGptPage = () => {
    const dispatch = useDispatch();
    const [loader,setLoader] = useState<boolean>(false);
    const gptSearchTextList = useSelector((state:any)=>state?.showGptPage?.searchSuggestionTextList)
    const gptSearchMovieList = useSelector((state:any)=>state?.showGptPage?.searchMovieResult)
    // console.log(gptSearchMovieList)

    

    //  console.log("Search Results are here ");
    
    const searchMovieFetch = async (keyword:string)=>{
     const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,movieOptionsApi)
     const json = await res.json();
    return json.results;
    }
    
   
   
    const gptHandler = async()=>{
      setLoader(true);
        console.log("I am in Gpt handler")
        const gptQuery = "Act as a Movie Recommendation System and suggest some for the Query "+searchText+". only give me names of 5 movies, comma seperated like the example result given ahead . Example Result: Gadar, sholay, Koi Mil gaya, Don,  Golmaal ";
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'assistant', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          let suggestList = [searchText];
  console.log(chatCompletion.choices[0]?.message.content);
     
       
  if(chatCompletion.choices[0].message.content){
suggestList = chatCompletion.choices[0].message.content.split(",")
       
  }
      
      
      const searchList = suggestList.map((item)=>{
           return searchMovieFetch(item);
      })
     
      const searchResult = await Promise.all(searchList);
     console.log(searchResult);
     dispatch(setSuggestionMovies({
      searchSuggestionTextList:suggestList
      ,searchMovieResult:searchResult}))
     
      setLoader(false)


    }
    const [searchText,setSearchText] = useState<string>("");
  return (
    <Box w={"100%"}    h={"100vh"} bgColor={"yellow"}>

      <Image  w={"100%"} position={"fixed"} top={'0'} src='https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png' h={"100%"}/>
    
    <Box pos={"relative"} zIndex={"5"}>
       <Header/></Box>
         
         <form onSubmit={(e)=>{
           e.preventDefault();
           gptHandler();
           
           
    
         }}>
         <HStack justifyContent={"center"} w={"100%"} pos={"relative"} zIndex={"2"} >
         <HStack bgColor={"gray.900"} my={"10px"} border={"1px solid white"}  borderRadius={"10px"} w={"60%"} h={"70px"} px={"20px"}>
      <Input placeholder='Search Movies Here ' value={searchText} onChange={(e)=>{
       setSearchText(e.target.value)
      }} type='text' borderColor={"whiteAlpha.500"} h={"40px"}  bgColor={"white"} />
      <Button type="submit" colorScheme="red">Search</Button>
      </HStack>
      </HStack>
      </form>


      

      {loader? <HStack justifyContent={"center"}> <Box position={"relative"} w={["100%","95%"]}  zIndex={"2"}>  <Box h={"80%"} w={"100%"}  bgColor={"blackAlpha.800"}>
      <VStack w={"100%"} h={["300px","72vh"]} justifyContent={"center"} alignItems={"center"}>
      <Spinner h={"100px"}  w={"100px"} color='red.500' />
      <Text color={"red.500"} fontWeight={"bold"} fontSize={"18px"}>Please Wait It Can Take Little Bit Time Because We Are Using An AI To Recommend Movie .</Text>
      </VStack>

    </Box> </Box> </HStack>: <HStack w={"100%"} justifyContent={"center"} pos={"relative"} zIndex={"2"} >

<Box w={["100%","95%"]}    bgColor={"blackAlpha.800"} >


{(gptSearchTextList)?gptSearchTextList.map((movieName:any,index:any)=>{
return <MovieSlider key={movieName} title={movieName.toUpperCase()} movie={gptSearchMovieList[index]}/>
}):""}  
</Box>
</HStack>}
     
      </Box>
  )
}

export default SearchGptPage