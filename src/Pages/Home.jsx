import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCreditCardFill } from 'react-icons/bs'

const Home = () => {
  return (
    <Box h={"100vh"} w={"100%"}>
      <Flex w={"90%"} margin={"auto"} h={"80%"}>
        <Flex justifyContent={"space-around"} w={"100%"} alignItems={"center"}>
          <Box h={"80%"} w={"35%"}>
            <Box h={"30%"} w={"50"} mt={"5"}>
              <Text
                fontSize={"43px"}
                fontWeight={"extrabold"}
                textColor={"#57357F"}
              >
                The money app for Africans.
              </Text>
            </Box>

            <Box h={"22%"} w={"50"} mt={"9"}>
              <Text fontSize={"20px"}>
                Make free transfers, enjoy cashless payment options and earn
                interest on your savings with Kuda.
              </Text>
            </Box>

            <Flex h={"13%"} w={"50"} mt={"9"}>
              <Link h={"12"} w={"30%"}>
                <Image
                  objectFit="contain"
                  src="/images/appStore.png"
                  alt="logo"
                  width={"fit-content"}
                  mb={""}
                />
              </Link>

              <Link h={"12"} w={"30%"} marginLeft={"6"}>
                <Image
                  objectFit="cover"
                  src="/images/GooglePlay.png"
                  alt="logo"
                  width={"fit-content"}
                  mb={""}
                />
              </Link>
            </Flex>
            <Flex h={"13%"} w={"50"}>
              <Text fontSize={"12"}>
                Fully Licensed by the CBN 🙌 Deposits lnsured by
              </Text>
              <Box h={"12"} w={"15%"} marginLeft={"2"}>
                <Image
                  objectFit="cover"
                  src="/images/NDIC.png"
                  alt="logo"
                  width={"fit-content"}
                />
              </Box>
            </Flex>
          </Box>
          <Flex
            h={"90%"}
            w={"50%"}
            // borderRadius="full"
            justify={"center"}
            alignItems={"center"}
            backgroundImage="/images/adaka.png  "
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"flex"}
            margin={"auto"}
          ></Flex>
        </Flex>
      </Flex>

      <Box w={"90%"} margin={"auto"} h={"90%"} bg={'red'}>
            <Flex w={"90%"} margin={"auto"} h={"50%"} bg={'green'} border={'1px'} justifyContent={'space-evenly'} alignItems={'center'}>
                <Box border={'1px'} h={'60%'} w={'30%'}>
                    <Box border={'1px'} h={'12'} w={'18%'} marginLeft={'4'}>
                      <BsFillCreditCardFill/>
                    </Box>

                    <Box border={'1px'} h={'70%'} w={'90%'} margin={'auto'}>
                            <Text></Text>
                    </Box>
                </Box>

                <Box border={'1px'} h={'60%'} w={'30%'}>

                <Box border={'1px'} h={'12'} w={'18%'} marginLeft={'4'}>

                </Box>

                <Box border={'1px'} h={'70%'} w={'90%'} margin={'auto'}>

                </Box>

                </Box>

                <Box border={'1px'} h={'60%'} w={'30%'}>
                <Box border={'1px'} h={'12'} w={'18%'} marginLeft={'4'}>

                  </Box>

                  <Box border={'1px'} h={'70%'} w={'90%'} margin={'auto'}>

                  </Box>

                </Box>
            </Flex>

            <Flex w={"80%"} margin={"auto"} h={"40%"} bg={'blue'} border={'1px'}  justifyContent={'space-evenly'} alignItems={'center'}>

            <Box border={'1px'} h={'70%'} w={'35%'}>
            <Box border={'1px'} h={'12'} w={'18%'} marginLeft={'4'}>

              </Box>

              <Box border={'1px'} h={'70%'} w={'90%'} margin={'auto'}>

              </Box>
            </Box>

            <Box border={'1px'} h={'70%'} w={'35%'}>
                 <Box border={'1px'} h={'12'} w={'18%'} marginLeft={'4'}>

                    </Box>

                    <Box border={'1px'} h={'70%'} w={'90%'} margin={'auto'}>

                    </Box>
            </Box>

            </Flex>
      </Box>

    </Box>
  );
};

export default Home;
