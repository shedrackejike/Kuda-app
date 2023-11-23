import { Box, Flex, Text } from "@chakra-ui/react";
import { TbArrowLoopRight2 } from "react-icons/tb";
import { PiPlusCircleFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { MdOutlineDevicesFold } from "react-icons/md";
import { IoAppsOutline } from "react-icons/io5";
import { IoBookmarksOutline } from "react-icons/io5";

import React from "react";

const DHome = () => {
  return (
    <Box minH={"500px"} w={"100%"}>
      <Box minH={"400px"} w={"50%"} m={"auto"} boxShadow="md" p="2" bg="white">
        <Flex justifyContent={"space-between"}>
          <Box minH={"100px"} w={"200px"}>
            <Flex alignItems={"center"} justifyContent={"center"} mt={"2"}>
              <Box
                minH={"12"}
                w={"12"}
                borderRadius="full"
                justify={"center"}
                alignItems={"center"}
                backgroundImage="/images/niger.jpeg"
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                display={"flex"}
                margin={"auto"}
              >
                {/* <Text>Account</Text> */}
              </Box>
              <Box minH={"90px"} w={"130px"}>
                <Text fontSize={"10"}>Nigeria Naira</Text>
                <Text fontSize={"30px"} fontWeight={"bold"}>
                  #500.00
                </Text>
                <Text fontSize={"12"}>last updated 1mg ago</Text>
              </Box>
            </Flex>
          </Box>

          <Box minH={"100px"} w={"150px"} mt={"2"}>
            <Box
              boxShadow="md"
              p="2"
              bg="white"
              rounded={"md"}
              position={"relative"}
              w={"120px"}
              justifyContent={"space-around"}
              display={"flex"}
              alignItems={"center"}
            >
              <TbArrowLoopRight2 />

              <Text
                display={"flex"}
                alignItems={"center"}
                fontSize={"15"}
                fontWeight={"semibold"}
                cursor={"pointer"}
              >
                Convert
              </Text>
            </Box>

            <Box
              boxShadow="md"
              p="2"
              bg="white"
              rounded={"md"}
              mt={"2"}
              position={"relative"}
              w={"120px"}
              justifyContent={"space-around"}
              display={"flex"}
              alignItems={"center"}
            >
              <PiPlusCircleFill />

              <Text
                display={"flex"}
                alignItems={"center"}
                fontSize={"15"}
                fontWeight={"semibold"}
                cursor={"pointer"}
              >
                Add Money
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          minH={"50px"}
          w={"420px"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box
            boxShadow="md"
            p="2"
            bg="white"
            rounded={"md"}
            mt={"2"}
            position={"relative"}
            w={"100px"}
            justifyContent={"space-around"}
            display={"flex"}
            alignItems={"center"}
          >
            <IoBookmarksOutline />

            <Text
              display={"flex"}
              alignItems={"center"}
              fontSize={"15"}
              fontWeight={"semibold"}
              cursor={"pointer"}
            >
              Spend
            </Text>
          </Box>
          <Box
            boxShadow="md"
            p="2"
            bg="white"
            rounded={"md"}
            mt={"2"}
            position={"relative"}
            w={"100px"}
            justifyContent={"space-around"}
            display={"flex"}
            alignItems={"center"}
          >
            <IoAppsOutline />

            <Text
              display={"flex"}
              alignItems={"center"}
              fontSize={"15"}
              fontWeight={"semibold"}
              cursor={"pointer"}
            >
              Save
            </Text>
          </Box>
          <Box
            boxShadow="md"
            p="2"
            bg="white"
            rounded={"md"}
            mt={"2"}
            position={"relative"}
            w={"100px"}
            justifyContent={"space-around"}
            display={"flex"}
            alignItems={"center"}
          >
            <MdOutlineDevicesFold />

            <Text
              display={"flex"}
              alignItems={"center"}
              fontSize={"15"}
              fontWeight={"semibold"}
              cursor={"pointer"}
            >
              Borrow
            </Text>
          </Box>
          <Box
            boxShadow="md"
            p="2"
            bg="white"
            rounded={"md"}
            mt={"2"}
            position={"relative"}
            w={"100px"}
            justifyContent={"space-around"}
            display={"flex"}
            alignItems={"center"}
          >
            <FaLink />

            <Text
              display={"flex"}
              alignItems={"center"}
              fontSize={"15"}
              fontWeight={"semibold"}
              cursor={"pointer"}
            >
              invest
            </Text>
          </Box>
        </Flex>

        <Flex
          minH={"50px"}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text>Beneficiares</Text>
          <Text textColor={"whatsapp.400"}> View All</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default DHome;
