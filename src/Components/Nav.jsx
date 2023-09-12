import { Flex ,Box , Image, Text} from "@chakra-ui/react"

const Nav = () => {
  return (
    <Flex bg={'red'} h={'22%'} w={'100%'}>
     <Flex w={'100%'} bg={'yellow'} m={'auto'} display={'flex'} justify={'space-around'} align={'center'}>
     <Box border={'1px'}>
        <Image
                  objectFit="cover"
                  src="/images/kudalogo.png"
                  alt="logo"
                  width={'70px'}
                  mb={''}
                />
        </Box>

       <Flex border={'1px'} w={'50%'} justify={'space-around'}>

       <Text>Personal</Text>
        <Text>Business</Text>
        <Text>Company</Text>
        <Text>Help</Text>

       </Flex>

       <Flex border={'1px'} w={'20%'} justify={'space-around'}>
            <Box>Sign In</Box>
            <Box>join Kuda</Box>
       </Flex>

       <Box border={'1px'} w={'5%'}>
        w
       </Box>
     </Flex>

    </Flex>
  )
}

export default Nav
