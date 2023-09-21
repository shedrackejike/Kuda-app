import React, { useEffect, useState } from 'react'
import { Flex, Box, Image,Text } from '@chakra-ui/react'
import { partersData } from '../../utils/partners'


const Partners = () => {
    const  [parters,setParterns] = useState([])

    useEffect(()=>{
        setParterns(partersData)
    },[])

  return (
    <Box bg={'#FBFBFB'}  margin={"auto"} minH={"60%"} alignItems={'center'} justifyContent={'center'} display={'flex'}>
      
      <Box  minH={'70%'} w={'90%'}>
        
      <Box  w={'50%'} minH={'60px'}  margin={'auto'} mt={'%'}>
            <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'} textColor={"#57357F"}>Our Partners</Text>
        </Box>

      <Flex  mt={'1%'} >
             {parters?.map(data =>(
            <Flex  w={'90%'}   minH={'80px'}  alignItems={'center'} justifyContent={'center'} margin={'auto'}>
          <Box  h={'40px'} w={'160px'} >
          <Image
          objectFit="inherit"
          src={data.image}
          alt="logo"
          width={"fit-content"}
          boxSize="100%"
          />
          </Box>
  </Flex>
    ))} 
      </Flex>
      </Box>

   </Box>
    )
}

export default Partners