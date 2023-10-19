import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import React, { useRef } from "react";
import { AiTwotoneHome, AiFillCreditCard } from "react-icons/ai";
import { GiBeard, GiNetworkBars } from "react-icons/gi";
import { FaTelegramPlane, FaWifi } from "react-icons/fa";
import { WiMoonWaningCrescent1 } from "react-icons/wi";
import { HiLightBulb } from "react-icons/hi";
import { FcFullBattery } from "react-icons/fc";
import { BsBagFill } from "react-icons/bs";
import {
  PiContactlessPaymentFill,
  PiTelevisionSimpleFill,
  PiGlobeThin,
} from "react-icons/pi";
import { BiSolidCar } from "react-icons/bi";
import { VscIssueDraft } from "react-icons/vsc";

const Person = () => {
  return (
    <Flex
      className="Personal"
      minH={"500px"}
      w={"500px"}
      bg={"white"}
      borderRadius={"9"}
      boxShadow="2xl"
      p="1"
      rounded="md"
    >
      <Box h={"350px"} w={"265px"} mt={"5"}>
        <Box
          h={"300px"}
          w={"250px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box w={"250px"} mt="2">
            <Flex
              className="shrdrack"
              h={"35px"}
              w={"200px"}
              alignItems={"center"}
              marginLeft={"5"}
            >
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#F3F5FF"}
              >
                <AiTwotoneHome />
              </Box>
              <RouterLink to={"/"}>
                <Text
                  marginLeft={"3"}
                  textColor={"black"}
                  fontSize={"12"}
                  cursor={"pointer"}
                >
                  Discover Personal
                </Text>
              </RouterLink>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#E6FFF1"}
              >
                <FaTelegramPlane />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                <Link as={RouterLink} to="/transfer">
                  Transfer & Spend
                </Link>
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#F3F5FF"}
              >
                <WiMoonWaningCrescent1 />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Budget Coming Soon
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex
              h={"35px"}
              w={"200px"}
              alignItems={"center"}
              marginLeft={"5"}
              className="shrdrack1"
            >
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#FFF8E5"}
              >
                <GiBeard />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"15"}>
                <Link as={RouterLink} to="/save">
                  Save
                </Link>
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <GiNetworkBars />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                <Link as={RouterLink} to={"/investment"}>
                  Investments
                </Link>
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#E6FFF1"}
              >
                <AiFillCreditCard />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                <Link as={RouterLink} to={"/kuda"}>
                  Kuda Card
                </Link>
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box
        minH={"499px"}
        w={"250px"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        borderRadius={"9"}
        bg={"#F9F9F9"}
      >
        <Box h={"450px"} w={"220px"}>
          <Box>
            <Text fontSize={"10"} textColor={"black"} fontWeight={"bold"}>
              PAYMENTS
            </Text>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#FDE3E3"}
              >
                <HiLightBulb />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                <Link as={RouterLink} to={"/electricity"}>
                  Electricity
                </Link>
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#E4FDEF"}
              >
                <FcFullBattery />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                <Link as={RouterLink} to={"/airtime"}>
                  Airtime
                </Link>
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#E3F8FD"}
              >
                <FaWifi />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Internet
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#F1F3FD"}
              >
                <BsBagFill />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Gift Cards
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#FDF6E3"}
              >
                <PiContactlessPaymentFill />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Cardless Payments
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#E3F8FD"}
              >
                <PiTelevisionSimpleFill />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                TV
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#F3F5FF"}
              >
                <PiGlobeThin />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Betting
              </Text>
            </Flex>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#F3F5FF"}
              >
                <BiSolidCar />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Transport
              </Text>
            </Flex>
          </Box>

          <Box>
            <Text fontSize={"10"} textColor={"black"} fontWeight={"bold"}>
              CREDIT
            </Text>
          </Box>

          <Box w={"250px"} mt="2">
            <Flex h={"35px"} w={"200px"} alignItems={"center"} marginLeft={"5"}>
              <Box
                h={"6"}
                w={"8"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#F3F5FF"}
              >
                <VscIssueDraft />
              </Box>
              <Text marginLeft={"3"} textColor={"black"} fontSize={"12"}>
                Overdrafts
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Person;
