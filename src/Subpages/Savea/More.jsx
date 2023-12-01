import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { saveDate } from "../../utils/save";

const More = () => {
  const [save, setSave] = useState([]);

  useEffect(() => setSave(saveDate), []);
  return (
    <Box
      margin={"auto"}
      w={{ base: "100%", md: "90%" }}
      mt={"90px"}
      // bg={"red"}
      minH={{ base: "350px", md: "550px" }}
    >
      {save?.map((data) => (
        <Flex
          //   minH={"500px"}
          //   w={"100%"}
          //   justifyContent={"space-around"}
          //   alignItems={"center"}
          minH={{ base: "300px", md: "550px" }}
          alignItems={"center"}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            //   minH={"250px"} w={"40%"}
            // bg={"red"}
            minH={{ base: "300px", md: "400px" }}
            w={{ base: "90%", md: "40%" }}
            // alignItems={"center"}
            justifyContent={{ base: "left", md: "center" }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"80px"} w={{ base: "360px", md: "320px" }}>
              <Text
                fontSize={{ base: "46px", md: "40px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                textAlign={{ base: "center", md: "left" }}
              >
                {data.head}
              </Text>
            </Box>

            <Box
              minH={"80px"}
              //   w={"400px"}
              mt={"3"}
              w={{ base: "100%", md: "400px" }}
            >
              <Text textAlign={{ base: "center", md: "left" }}>
                {data.Comment}
              </Text>
            </Box>

            <Box
              minH={"40px"}
              w={"120px"}
              mt={"3"}
              m={{ base: "auto", md: "0" }}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#40196D"}
              borderRadius={"7"}
            >
              <Text textColor={"white"}>{data.button}</Text>
            </Box>
          </Box>

          <Box
            // minH={"470px"}
            // w={"50%"}
            minH={{ base: "390px", md: "400px" }}
            w={{ base: "90%", md: "45%" }}
            justify={"center"}
            alignItems={"center"}
            backgroundImage={data.Image}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            display={"flex"}
            margin={"auto"}
          ></Box>
        </Flex>
      ))}
    </Box>
  );
};

export default More;
