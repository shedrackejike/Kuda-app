import { Box , Text, Flex,Link} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { strachData } from '../../utils/strach'

const Strach = () => {
    const [strach,setStrach] = useState([])

        useEffect(() =>(
          setStrach(strachData)      
        ),[])
  return (
   <Box>
         <Box minH={"650px"} w={'100%'} margin={'auto'}>
        {strach?.map((data)=>(
        <Flex minH={'500px'} w={'100%'}  justifyContent={'space-around'} alignItems={'center'} >

            

            <Box minH={'490px'} w={'55%'}
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
            
        
             <Box minH={'250px'} w={'40%'} >
                <Box minH={'80px'} w={'390px'} >
                    <Text fontSize={'36px'} fontWeight={'bold'} textColor={'#40196D'}>{data.head}</Text>
                </Box>

                <Box minH={'80px'} w={'400px'}  mt={'3'}>
                    <Text>{data.Comment}</Text>
                </Box>

                <Box minH={'40px'} w={'255px'}  mt={'3'} alignItems={'center'} justifyContent={'center'} display={'flex'} >
                    <Link>
                    <Text fontWeight={'semibold'} textColor={'#40196D'}>{data.button} </Text>
                    </Link>
                </Box>

            </Box>

        </Flex>
        ))}
    </Box>
   </Box>
  )
}

export default Strach
