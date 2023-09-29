import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

const Nav = () => {
  return (
    <Flex h="65px" w={"100%"}  bg={'red'}>
      <Flex
        w={"97%"}
        h={"100%"}
        m={"auto"}
        display={"flex"}
        justify={"space-around"}
        align={"center"}
        
      >
        <Flex w={"60%"}>
          <Box>
            <Image
              objectFit="cover"
              src="/images/kudalogo.png"
              alt="logo"
              width={"70px"}
              mb={""}
            />
          </Box>

          <Flex w={"70%"} justify={"space-evenly"}>
            <Text
              display={"flex"}
              alignItems={"center"}
              textColor={"#57357F"}
              fontSize={"15"}
              fontWeight={"semibold"}
              _hover={""}
              cursor={"pointer"}
            >
              Personal <MdArrowDropDown />
            </Text>
            <Text
              display={"flex"}
              alignItems={"center"}
              textColor={"#57357F"}
              fontSize={"15"}
              fontWeight={"semibold"}
              _hover={""}
              cursor={'pointer'}
            >
              Business <MdArrowDropDown />
            </Text>
            <Text
              display={"flex"}
              alignItems={"center"}
              textColor={"#57357F"}
              fontSize={"15"}
              fontWeight={"semibold"}
              _hover={""}
              cursor={'pointer'}
            >
              Company <MdArrowDropDown />
            </Text>
            <Text
              display={"flex"}
              alignItems={"center"}
              textColor={"#57357F"}
              fontSize={"15"}
              fontWeight={"semibold"}
              _hover={''}
              cursor={'pointer'}
            >
              Help <MdArrowDropDown />
            </Text>
          </Flex>
        </Flex>

        <Flex h={"12"} w={"25%"} justify={"space-around"} align={"center"}>
          <Box
            textColor={"#57357F"}
            w={"26%"}
            textAlign={"center"}
            fontSize={"12"}
            cursor={'pointer'}
          >
            Sign In
          </Box>
          <Box
            h={"10"}
            bg={"#40196D"}
            w={"50%"}
            textAlign={"center"}
            textColor={"white"}
            fontSize={"14"}
            fontWeight={"bold"}
            borderRadius={"9"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={'pointer'}
          >
            join Kuda
          </Box>

          <Box
            h={"8"}
            w={"9"}
            borderRadius="full"
            justify={"center"}
            alignItems={"center"}
            backgroundImage="/images/niger.jpeg"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"flex"}
            margin={"auto"}
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
