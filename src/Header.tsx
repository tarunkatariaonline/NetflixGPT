import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box h={"70px"} w={"100%"}  bgColor={"blackAlpha.600"}  shadow={"dark-lg"} display={"flex"}  alignItems={"center"}>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' h={"50px"} mx={"10px"}/>

     
    </Box>
  )
}

export default Header