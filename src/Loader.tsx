import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { Spinner,Text } from '@chakra-ui/react'

const Loader = () => {
  return (

    <Box h={"100vh"} w={"100%"} position={"relative"} zIndex={"5"}  bgColor={"black"}>
      <VStack w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Spinner h={"100px"}  w={"100px"} color='red.500' />
      
      </VStack>

    </Box>
  )
}

export default Loader