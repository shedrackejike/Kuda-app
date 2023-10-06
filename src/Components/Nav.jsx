import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import "./Navbar.css"
import Person from "../Subpages/Personal/Person";
import Business from "../Subpages/Business/Business";
import Company from "../Subpages/Company/Company";
import Help from "../Subpages/Help/Help";

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

          <Flex w={"70%"} justify={"space-evenly"} align={"center"}  >
           <Box className="forf" position={"relative"}>
           <Text className="person"
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
            <Box className="Personal" position={"absolute"}>
              <Person/>
            </Box>
           </Box>

            <Box  className="forf" position={"relative"}>
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
            <Box className="Personal" position={"absolute"}>
              <Business/>
            </Box>
            </Box>

            
            <Box className="forf" position={"relative"}>
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
            <Box className="Personal" position={"absolute"}>
              <Company/>
            </Box>
            </Box>

           <Box className="forf" position={"relative"}>
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
            <Box className="Personal" position={"absolute"}>
              <Help/>
            </Box>
           </Box>


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
