import React, { useState } from 'react'
import { Box, Input ,HStack, Button, Image} from '@chakra-ui/react'
import Header from './Header'
import OpenAI from 'openai';
import { json } from 'react-router-dom';
import { movieOptionsApi } from './Utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestionMovies } from './Redux/Slice/showGptPageSlice';
import MovieSlider from './MovieSlider';
const openai = new OpenAI({
    apiKey: "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", 
    // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true 
  });
const SearchGptPage = () => {
    const dispatch = useDispatch();
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
  //       console.log("I am in Gpt handler")
  //       const chatCompletion = await openai.chat.completions.create({
  //           messages: [{ role: 'user', content: 'Say this is a test' }],
  //           model: 'gpt-3.5-turbo',
  //         });

          
  // console.log(chatCompletion.choices);
      let suggestList = [searchText];

      // suggestList = ["gadar","pathaan","jawan"]
       
      
      const searchList = suggestList.map((item)=>{
           return searchMovieFetch(item);
      })
     
      const searchResult = await Promise.all(searchList);
     console.log(searchResult);
     dispatch(setSuggestionMovies({
      searchSuggestionTextList:suggestList
      ,searchMovieResult:searchResult}))
     


    }
    const [searchText,setSearchText] = useState<string>("");
  return (
    <Box w={"100%"}    h={"100vh"} bgColor={"yellow"}>

      <Image  w={"100%"} position={"fixed"} top={'0'} src='https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png' h={"100%"}/>
      <Header/>
         
         <form onSubmit={(e)=>{
           e.preventDefault();
           gptHandler();
           
           
    
         }}>
         <HStack justifyContent={"center"} w={"100%"} pos={"relative"} zIndex={"2"} >
         <HStack bgColor={"gray.900"} my={"10px"} border={"1px solid white"}  borderRadius={"10px"} w={"60%"} h={"70px"} px={"20px"}>
      <Input value={searchText} onChange={(e)=>{
       setSearchText(e.target.value)
      }} type='text' borderColor={"whiteAlpha.500"} h={"40px"}  bgColor={"white"} />
      <Button type="submit" colorScheme="red">Search</Button>
      </HStack>
      </HStack>
      </form>


      
      <HStack w={"100%"} justifyContent={"center"} pos={"relative"} zIndex={"2"} >

       <Box w={"95%"}    bgColor={"blackAlpha.800"} >

       
  {(gptSearchTextList)?gptSearchTextList.map((movieName:any,index:any)=>{
    return <MovieSlider key={movieName} title={movieName.toUpperCase()} movie={gptSearchMovieList[index]}/>
  }):""}  
       </Box>
       </HStack>
      </Box>
  )
}

export default SearchGptPage