import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneHome, AiFillCreditCard} from 'react-icons/ai'
import { GiBeard, GiNetworkBars} from 'react-icons/gi'
import { FaTelegramPlane} from 'react-icons/fa'
import { WiMoonWaningCrescent1} from 'react-icons/wi'

const Person = () => {
  return (
    <Flex className='Personal' minH={'500px'} w={'500px'} border={'1px'} bg={"purple"} borderRadius={'9'} >
        <Box h={'350px'} w={'265px'} border={'1px'} mt={'5'}>

          <Box h={'300px'} w={'250px'} border={'1px'} alignItems={'center'} justifyContent={'center'}>
          <Box  w={'250px'} border={'1px'} mt='2'>
                <Flex h={'40px'} w={'240px'} border={'1px'} alignItems={'center'} >
                    <Box h={'8'} w={'10'} border={'1px'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                       <AiTwotoneHome/>                         
                    </Box>
                    <Text marginLeft={'3'}>
                    Discover Personal
                    </Text>
                </Flex>
            </Box >

             <Box  w={'250px'} border={'1px'} mt='2'>
                <Flex h={'40px'} w={'240px'} border={'1px'} alignItems={'center'} >
                    <Box h={'8'} w={'10'} border={'1px'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                       <FaTelegramPlane/>                         
                    </Box>
                    <Text marginLeft={'3'}>
                    Transfer & Spend
                    </Text>
                </Flex>
            </Box >

            <Box  w={'250px'} border={'1px'} mt='2'>
                <Flex h={'40px'} w={'240px'} border={'1px'} alignItems={'center'} >
                    <Box h={'8'} w={'10'} border={'1px'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                       <WiMoonWaningCrescent1/>                         
                    </Box>
                    <Text marginLeft={'3'}>
                    Budget Coming Soon
                    </Text>
                </Flex>
            </Box >

            <Box  w={'250px'} border={'1px'} mt='2'>
                <Flex h={'40px'} w={'240px'} border={'1px'} alignItems={'center'} >
                    <Box h={'8'} w={'10'} border={'1px'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                       <GiBeard/>                         
                    </Box>
                    <Text marginLeft={'3'}>
                    Save               
                    </Text>
                </Flex>
            </Box >

            <Box  w={'250px'} border={'1px'} mt='2'>
                <Flex h={'40px'} w={'240px'} border={'1px'} alignItems={'center'} >
                    <Box h={'8'} w={'10'} border={'1px'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                       <GiNetworkBars/>                         
                    </Box>
                    <Text marginLeft={'3'}>
                    Investments
                    </Text>
                </Flex>
            </Box >

             <Box  w={'250px'} border={'1px'} mt='2'>
                <Flex h={'40px'} w={'240px'} border={'1px'} alignItems={'center'} >
                    <Box h={'8'} w={'10'} border={'1px'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                       <AiFillCreditCard/>                         
                    </Box>
                    <Text marginLeft={'3'} textColor={'black'}>
                    Kuda Card

                    </Text>
                </Flex>
            </Box >
          </Box>
            
        </Box>

        <Box h={'499px'} w={'250px'} border={'1px'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderRadius={'9'}>
            <Box h={'470px'} w={'220px'} border={'1px'}>
                
            </Box>
        </Box>
    </Flex>
  )
}

export default Person