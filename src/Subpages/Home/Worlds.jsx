import { Box, Flex ,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { worldData } from '../../utils/world'

const Worlds = () => {
    const [words, setWords] = useState([])

    useEffect(()=>{
        setWords(worldData)
    },[])
  return (
    <Flex  margin={"auto"} minH={"40%"} >

     {words?.map(data =>(
           <Flex w={'100%'}   minH={'80px'}  alignItems={'center'} justifyContent={'center'}>
           <Box h={'40px'} w={'100px'} >
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
  )
}

export default Worlds
