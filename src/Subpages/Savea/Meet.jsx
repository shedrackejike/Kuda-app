import { Box,Text, Flex, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { meetData } from '../../utils/meet'

const Meet = () => {
    const [meet,setMeet] = useState([])

    useEffect(() =>(
         setMeet(meetData)   
    ),[])
  return (
    <Box minH={"650px"} w={'90%'} margin={'auto'}>
    {meet?.map((data)=>(
    <Flex minH={'500px'} w={'100%'}  justifyContent={'space-around'} alignItems={'center'} >

        
         <Box minH={'250px'} w={'40%'} >
            <Box minH={'80px'} w={'390px'} >
                <Text fontSize={'45px'} fontWeight={'bold'} textColor={'#40196D'}>{data.head}</Text>
            </Box>

            <Box minH={'80px'} w={'400px'}  mt={'3'}>
                <Text>{data.Comment}</Text>
            </Box>

            <Box minH={'40px'} w={'269px'}  mt={'3'} alignItems={'center'} justifyContent={'center'} display={'flex'}  >
                <Link>
                <Text fontWeight={'semibold'} textColor={'#40196D'}>{data.button}</Text>

                </Link>
            </Box>

        </Box>

        <Box minH={'470px'} w={'50%'}
         justify={"center"}
         alignItems={"center"}
         backgroundImage={data.image}  
         backgroundRepeat={"no-repeat"}
         backgroundPosition={"center"}
         backgroundSize={"contain"}
         display={"flex"}
         margin={"auto"}
        >

        </Box>
        
    

    </Flex>
    ))}
</Box>
  )
}

export default Meet
