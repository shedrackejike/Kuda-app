import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Registerb = () => {
  return (
    <Box
      bg={"black"}
      minH={"700px"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      <Box minH={"600px"} w={"90%"} margin={"auto"}>
        <Text
          textAlign={"center"}
          fontSize={"25px"}
          fontWeight={"bold"}
          textColor={"white"}
        >
          Registering your business just got easier.
        </Text>

        <Flex
          mt={"9"}
          minH={"500px"}
          w={"100%"}
          justifyContent={"space-around"}
        >
          <Box
            minH={"500px"}
            w={"45%"}
            borderRadius={"3xl"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"#FFF5DB"}
          >
            <Box
              minH={"80px"}
              w={"70px"}
              margin={"auto"}
              borderRadius={"50%"}
              bg={"#FFC83E"}
            ></Box>

            <Box
              minH={"80px"}
              w={"70%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Text fontSize={"24px"} fontWeight={"bold"}>
                Business Name Registration
              </Text>
            </Box>

            <Box
              minH={"80px"}
              w={"90%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Text fontSize={"15px"}>
                A registered business name is the name or title under which you
                can run a business legally as an individual. With a registered
                business name, you can run your business as a Sole
                Proprietorship (just you) or a Partnership (you and at least one
                other person).
              </Text>
            </Box>
            <Box
              minH={"50px"}
              w={"40%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Text fontSize={"35px"} fontWeight={"bold"}>
                ₦20,000.00
              </Text>
            </Box>
            <Box
              minH={"50px"}
              w={"35%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              borderRadius={"9"}
              bg={"black"}
            >
              <Text
                fontSize={"18px"}
                fontWeight={"bold"}
                textColor={"white"}
                cursor={"pointer"}
              >
                Register Now!
              </Text>
            </Box>
          </Box>

          <Box
            minH={"450px"}
            w={"45%"}
            borderRadius={"3xl"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"#DBF8FF"}
          >
            <Box
              minH={"80px"}
              w={"70px"}
              margin={"auto"}
              borderRadius={"50%"}
              bg={"#1DCBEF"}
            ></Box>

            <Box
              minH={"80px"}
              w={"70%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Text fontSize={"24px"} fontWeight={"bold"}>
                Company Registration
              </Text>
            </Box>

            <Box
              minH={"80px"}
              w={"90%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Text fontSize={"15px"}>
                A registered company is a Limited Liability Company (LLC) which
                is a separate legal entity from yourself. Running your business
                as an LLC requires having shareholders and a Board of Directors.
              </Text>
            </Box>
            <Box
              minH={"50px"}
              w={"40%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Text fontSize={"35px"} fontWeight={"bold"}>
                ₦60,000.00
              </Text>
            </Box>
            <Box
              minH={"50px"}
              w={"35%"}
              mt={"5"}
              margin={"auto"}
              mb={"5"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              borderRadius={"9"}
              bg={"black"}
            >
              <Text
                fontSize={"18px"}
                fontWeight={"bold"}
                textColor={"white"}
                cursor={"pointer"}
              >
                Register Now!
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Registerb;
