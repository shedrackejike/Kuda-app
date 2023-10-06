import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Company = () => {
  return (
   <Flex  minH={'170px'} w={'160px'}   bg={"white"}  alignItems={'center'} justifyContent={'center'} boxShadow="2xl" p="1" rounded="md" >
        <Box minH={'140px'} w={'130px'} >
            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>Blog</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>Press</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>Join Our Team</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>About Us</Text>
            </Box>
        </Box>
   </Flex>
  )
}

export default Company
