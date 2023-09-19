import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaBalanceScaleRight, FaPaperPlane } from "react-icons/fa";
import { HiShieldExclamation } from "react-icons/hi";
import { WiMoonAltWaxingGibbous1 } from "react-icons/wi";

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

      <Box w={"90%"} margin={"auto"} h={"90%"}>
        <Flex
          w={"90%"}
          margin={"auto"}
          h={"50%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box h={"50%"} w={"30%"} boxShadow="md" p="6" rounded="md" bg="white">
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <BsFillCreditCardFill />
            </Box>

            <Box h={"60%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Order a Kuda Visa card on the app with pickup and delivery
                options
              </Text>
            </Box>
          </Box>

          <Box h={"50%"} w={"30%"} boxShadow="md" p="6" rounded="md" bg="white">
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <WiMoonAltWaxingGibbous1 />
            </Box>

            <Box h={"60%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Enjoy cashless payment options online and offline.
              </Text>
            </Box>
          </Box>

          <Box h={"50%"} w={"30%"} boxShadow="md" p="6" rounded="md" bg="white">
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <FaBalanceScaleRight />
            </Box>

            <Box h={"60%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Pay your essential bills and buy gift cards easily.
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          w={"80%"}
          margin={"auto"}
          h={"40%"}
          justifyContent={"space-evenly"}
        >
          <Box h={"70%"} w={"35%"} boxShadow="md" p="6" rounded="md" bg="white">
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <FaPaperPlane />
            </Box>

            <Box h={"70%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Get 25 free transfers to Nigerian banks every month.
              </Text>
            </Box>
          </Box>

          <Box h={"70%"} w={"35%"} boxShadow="md" p="6" rounded="md" bg="white">
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <HiShieldExclamation />
            </Box>

            <Box h={"70%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Save money automatically any time you spend.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box bg={"yellow"} border={"1px"} w={"90%"} margin={"auto"} h={"90%"}>
        <Flex border={"1px"} w={"90%"} margin={"auto"} h={"90%"}>
          <Box border={"1px"} w={"90%"} margin={"auto"} h={"90%"}>
            <Box border={'1px'} w={'50%'} h={'60%'}>
            <Text fontSize={'44.5px'}>
            Your phone +
            our app +
            a debit card =
            a simpler life.

            </Text>
            </Box>

            <Box border={'1px'} w={'90%'} h={'20%'} mt={2}>
                <Text>
                We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.


                </Text>
            </Box>

            <Box border={'1px'} w={'70%'} h={'13%'} mt={'3'}>
                <Link>
                <Text>Open An Account in Minutes </Text>
                </Link>
            </Box>
          </Box>

          <Box border={"1px"} w={"90%"} margin={"auto"} h={"90%"}>
            <Image
              objectFit="cover"
              src="/images/phone.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
