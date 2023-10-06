import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneHome} from 'react-icons/ai'
import { HiLightBulb} from 'react-icons/hi'
import { BsFileEarmarkPost} from 'react-icons/bs'
import { MdInventory2} from 'react-icons/md'
import { FaCashRegister} from 'react-icons/fa'

const Business = () => {
  return (
    <Flex minH={'270px'} w={'220px'}   bg={"white"}  alignItems={'center'} justifyContent={'center'} display={'flex'}  boxShadow="2xl" p="1" rounded="md" >
          <Box minH={'250px'} w={'200px'} >

                <Box w={'250px'}  mt='2'>
                    <Flex  h={'39px'} w={'200px'}  alignItems={'center'} marginLeft={'5'}>
                        <Box h={'6'} w={'8'}  borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                        <AiTwotoneHome/>
                        </Box>

                        <Text marginLeft={'3'} textColor={'black'} fontSize={'12'}>
                        Discover Business
                        </Text>         
                    </Flex>
                </Box>

                <Box w={'250px'}  mt='2'>
                    <Flex  h={'39px'} w={'200px'}  alignItems={'center'} marginLeft={'5'}>
                        <Box h={'6'} w={'8'}  borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                        <FaCashRegister/>
                        </Box>

                        <Text marginLeft={'3'} textColor={'black'} fontSize={'12'}>
                        Business Registration
                        </Text>         
                    </Flex>
                </Box>

                <Box w={'250px'}  mt='2'>
                    <Flex  h={'39px'} w={'200px'}  alignItems={'center'} marginLeft={'5'}>
                        <Box h={'6'} w={'8'}  borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                        <BsFileEarmarkPost/>
                        </Box>

                        <Text marginLeft={'3'} textColor={'black'} fontSize={'12'}>
                        SoftPOS
                        </Text>         
                    </Flex>
                </Box>

                <Box w={'250px'}  mt='2'>
                    <Flex  h={'39px'} w={'200px'}  alignItems={'center'} marginLeft={'5'}>
                        <Box h={'6'} w={'8'}  borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                        <MdInventory2/>
                        </Box>

                        <Text marginLeft={'3'} textColor={'black'} fontSize={'12'}>
                        Invoicing
                        </Text>         
                    </Flex>
                </Box>

                <Box w={'250px'}  mt='2'>
                    <Flex  h={'39px'} w={'200px'}  alignItems={'center'} marginLeft={'5'}>
                        <Box h={'6'} w={'8'}  borderRadius={'50%'} alignItems={'center'} justifyContent={'center'} display={'flex'} bg={'#F3F5FF'}>
                        <HiLightBulb/>
                        </Box>

                        <Text marginLeft={'3'} textColor={'black'} fontSize={'12'}>
                        Electricity
                        </Text>         
                    </Flex>
                </Box>

               
            </Box>  
    </Flex>
  )
}

export default Business
