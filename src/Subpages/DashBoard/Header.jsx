import { Flex, Box, Image, Text, IconButton } from "@chakra-ui/react";

import { AiFillHome } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { FiCircle } from "react-icons/fi";
import { FaIdCard } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom";
// import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

const Header = () => {
  const [display, changeDisplay] = useState("none");

  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  }
  return (
    <Box>
      <Flex>
        <Flex
          minH="65px"
          position={"fixed"}
          zIndex={"5"}
          w={"100%"}
          top="0"
          boxShadow="md"
          p="2"
          bg="white"
        >
          <Flex
            // bg={"gray"}
            h={"100%"}
            display={"flex"}
            justify={{ base: "space-between", xl: "space-around" }}
            align={"center"}
            w={{ base: "100%", md: "100%" }}
          >
            <Flex w={"90%"}>
              <Link to="/">
                <Flex w={"20%"} h="50px" pt="0px" align="center">
                  <Image
                    objectFit="cover"
                    src="/images/kudalogo.png"
                    alt="logo"
                    mb={"3"}
                    width={"440px"}
                  />
                </Flex>
              </Link>

              <Flex
                // bg={"green"}
                w={"60%"}
                justify={"space-evenly"}
                align={"center"}
                display={{ base: "none", lg: "flex", xl: "flex" }}
              >
                <Box
                  className="forf"
                  position={"relative"}
                  //   border={"1px"}
                  w={"70px"}
                  justifyContent={"space-between"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <AiFillHome />

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
                    Home
                  </Text>
                  <Box className="Personal" position={"absolute"}></Box>
                </Box>

                <Box
                  className="forf"
                  position={"relative"}
                  w={"60px"}
                  justifyContent={"space-around"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <PiTelegramLogoLight />

                  <Text
                    display={"flex"}
                    alignItems={"center"}
                    textColor={"#57357F"}
                    fontSize={"15"}
                    fontWeight={"semibold"}
                    _hover={""}
                    cursor={"pointer"}
                  >
                    Send
                  </Text>
                  <Box className="Personal" position={"absolute"}></Box>
                </Box>

                <Box
                  className="forf"
                  position={"relative"}
                  w={"60px"}
                  justifyContent={"space-around"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <MdOutlineEventNote />

                  <Text
                    display={"flex"}
                    alignItems={"center"}
                    textColor={"#57357F"}
                    fontSize={"15"}
                    fontWeight={"semibold"}
                    _hover={""}
                    cursor={"pointer"}
                  >
                    Pay
                  </Text>
                  <Box className="Personal" position={"absolute"}></Box>
                </Box>

                <Box
                  className="forf"
                  position={"relative"}
                  w={"75px"}
                  justifyContent={"space-around"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <FiCircle />

                  <Text
                    display={"flex"}
                    alignItems={"center"}
                    textColor={"#57357F"}
                    fontSize={"15"}
                    fontWeight={"semibold"}
                    _hover={""}
                    cursor={"pointer"}
                  >
                    Budget
                  </Text>
                  <Box className="Personal" position={"absolute"}></Box>
                </Box>

                <Box
                  className="forf"
                  position={"relative"}
                  w={"75px"}
                  justifyContent={"space-around"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <FaIdCard />

                  <Text
                    display={"flex"}
                    alignItems={"center"}
                    textColor={"#57357F"}
                    fontSize={"15"}
                    fontWeight={"semibold"}
                    _hover={""}
                    cursor={"pointer"}
                  >
                    Card
                  </Text>
                  <Box className="Personal" position={"absolute"}></Box>
                </Box>
              </Flex>
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

              <Box
                className="forf"
                position={"relative"}
                w={"75px"}
                justifyContent={"space-around"}
                display={"flex"}
                alignItems={"center"}
                // title={user && user.name}
              >
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  textColor={"#57357F"}
                  fontSize={"15"}
                  fontWeight={"semibold"}
                  _hover={""}
                  cursor={"pointer"}
                  onClick={logOut}
                >
                  Log out
                </Text>
              </Box>
            </Flex>

            <Flex align="center" justify="space-between">
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
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
