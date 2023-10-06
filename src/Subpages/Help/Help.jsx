import { Box, Flex , Text} from '@chakra-ui/react'
import React from 'react'

const Help = () => {
  return (
    <Flex  minH={'220px'} w={'160px'}   bg={"white"}  alignItems={'center'} justifyContent={'center'} boxShadow="2xl" p="1" rounded="md" >
        <Box minH={'200px'} w={'130px'} >
            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>Get Help</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>Scam Awareness</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text>FAQs</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text> Security</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text> Contact Us</Text>
            </Box>

            <Box h={'35px'} w={'120px'}  mt={'2'}>
                <Text> Self Help</Text>
            </Box>
            
        </Box>
   </Flex>
  )
}

export default Help
