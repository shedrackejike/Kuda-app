import {
  Flex,
  Box,
  Image,
  Text,
  IconButton,
  // useColorMode,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import "./Navbar.css";
import Person from "../Subpages/Personal/Person";
import Business from "../Subpages/Business/Business";
import Company from "../Subpages/Company/Company";
import Help from "../Subpages/Help/Help";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

const Nav = () => {
  // const { colorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      minH="65px"
      w={"100%"}
      bg={"white"}
      position={"fixed"}
      zIndex={"5"}
      top="0"
    >
      <Flex
        // w={"97%"}
        // bg={"green"}
        h={"100%"}
        m={"auto"}
        display={"flex"}
        justify={{ base: "space-between", xl: "space-around" }}
        align={"center"}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex w={"60%"}>
          <Link to="/">
            <Flex w={"30%"} h="50px" pt="0px" align="center">
              {/* {colorMode === "light" ? ( */}
              <Image
                objectFit="cover"
                src="/images/kudalogo.png"
                alt="logo"
                mb={"3"}
                width={"440px"}
              />
              {/* ) : ( */}
              {/* <Image
                  objectFit="cover"
                  src="/images/kudalogo.png"
                  alt="logo"
                  width={"440px"}
                  mb={"3"}
                /> */}
              {/* )} */}
            </Flex>
          </Link>
          {/* <Box>
            <Image
              objectFit="cover"
              src="/images/kudalogo.png"
              alt="logo"
              width={"70px"}
              mb={""}
            />
          </Box> */}

          <Flex
            w={"70%"}
            justify={"space-evenly"}
            align={"center"}
            display={{ base: "none", lg: "flex", xl: "flex" }}
          >
            <Box className="forf" position={"relative"}>
              <Text
                className="person jdcbcccxbjh"
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
                <Person />
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
                cursor={"pointer"}
              >
                Business <MdArrowDropDown />
              </Text>
              <Box className="Personal" position={"absolute"}>
                <Business />
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
                cursor={"pointer"}
              >
                Company <MdArrowDropDown />
              </Text>
              <Box className="Personal" position={"absolute"}>
                <Company />
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
                cursor={"pointer"}
              >
                Help <MdArrowDropDown />
              </Text>
              <Box className="Personal" position={"absolute"}>
                <Help />
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          // w={{ base: "none", lg: "10%", xl: "32%" }}s
        >
          <IconButton
            size="sm"
            display={{ base: "flex", lg: "none", xl: "none" }}
            as={GiHamburgerMenu}
            onClick={() => changeDisplay("flex")}
          />
        </Flex>
      </Flex>

      <Flex
        width={"100vw"}
        h="100vh"
        position="fixed"
        bgColor={"white"}
        zIndex="500"
        top={"0"}
        left={"0"}
        display={display}
        overflowY="auto"
        direction={"column"}
      >
        <Flex justify={"flex-end"}>
          <IconButton
            mt={2}
            mr={10}
            size="sm"
            as={GrClose}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex h={"12"} w={"65%"} justify={"space-around"} align={"center"}>
          <Box
            textColor={"#57357F"}
            w={"26%"}
            textAlign={"center"}
            fontSize={"12"}
            cursor={"pointer"}
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
            cursor={"pointer"}
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
        <Flex
          direction={"column"}
          // bgColor="black"
          // zIndex="300"
          justify="space-around"
          width={"100%"}
        >
          <Box h={"70px"} alignItems={"center"} display={"flex"}>
            <Text marginLeft={"5"} fontWeight="semibold" fontSize={"20px"}>
              {" "}
              Personal
            </Text>
            <Link to="/WhyOak"></Link>
          </Box>

          <Box h={"70px"} alignItems={"center"} display={"flex"}>
            <Text marginLeft={"5"} fontWeight="semibold" fontSize={"20px"}>
              <Link as={RouterLink} to={"/discover"}>
                Business
              </Link>
            </Text>
          </Box>

          <Box h={"70px"} alignItems={"center"} display={"flex"}>
            <Text marginLeft={"5"} fontWeight="semibold" fontSize={"20px"}>
              Company
            </Text>
          </Box>

          <Box h={"70px"} alignItems={"center"} display={"flex"}>
            <Text marginLeft={"5"} fontWeight="semibold" fontSize={"20px"}>
              Developers
            </Text>
            <Link to="/customer"></Link>
          </Box>

          <Box h={"70px"} alignItems={"center"} display={"flex"}>
            <Text marginLeft={"5"} fontWeight="semibold" fontSize={"20px"}>
              Contact Us
            </Text>
          </Box>

          <Box h={"70px"} alignItems={"center"} display={"flex"}>
            <Text marginLeft={"5"} fontWeight="semibold" fontSize={"20px"}>
              {" "}
              Help
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
