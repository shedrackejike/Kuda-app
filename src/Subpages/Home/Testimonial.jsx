import React, { useEffect, useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { testimonialData } from '../../utils/testimonials'

export default function Testimonial() {
const [monials,setMonials] = useState([])

useEffect(()=>{
setMonials(testimonialData)
},[])


  return (
    <Box  border={"1px"} margin={"auto"} h={"65%"}>
    <Box border={"1px"} h={"15%"} w={"90%"} margin={"auto"}>
      <Text
        textColor={"#57357F"}
        textAlign={"center"}
        fontSize={"37px"}
        fontWeight={"bold"}
      >
        Don’t just take our word for it
      </Text>
    </Box>

    <Flex mt={'5'} w={'100%'} bg={"red"} wrap={"wrap"} h={'70%'} border={'1px'} alignItems={'center'} justifyContent={'center'}>

    {monials?.map(item => (
      <Box mt={'5'}  h={'80%'} w={'30%'} alignItems={'center'} justifyContent={'center'} display={'flex'} boxShadow="md" p="1" rounded="md" bg="white">
          <Box   h={'84%'} w={'90%'}>
            <Box  h={'50%'} w={'100%'} >
              <Text fontSize={'14px'}>{item.comment}</Text>
            </Box>

           <Flex  h={'44%'} w={'90%'} mt={3} alignItems={'center'}>
           <Box  h={'74%'} w={'22%'} borderRadius={'50%'}>
            <Image
            borderRadius={'50%'}
          objectFit="inherit"
          src={item.image}
          alt="logo"
          width={"fit-content"}
          boxSize="100%"
        />

            </Box>
            <Text marginLeft={'2'}>{item.name}</Text>
           </Flex>

          </Box>
      </Box>
    ))}

      

    </Flex>
    
  </Box>
  )
}
