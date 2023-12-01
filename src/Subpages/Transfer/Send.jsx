import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sendData } from "../../utils/send";

const Send = () => {
  const [send, setSend] = useState([]);

  useEffect(() => setSend(sendData), []);
  return (
    <Box
      w={{ base: "100%", md: "100%" }}
      mt={"90px"}
      minH={{ base: "350px", md: "550px" }}
    >
      <Box minH={{ base: "300px", md: "550px" }} w={"90%"} margin={"auto"}>
        {send?.map((data) => (
          <Flex
            minH={{ base: "300px", md: "550px" }}
            alignItems={"center"}
            justifyContent={{ md: "space-between" }}
            w={{ base: "100%", md: "100%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              minH={{ base: "300px", md: "400px" }}
              w={{ base: "90%", md: "40%" }}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box minH={"80px"} w={{ base: "360px", md: "320px" }}>
                <Text
                  fontSize={{ base: "34px", md: "40px" }}
                  fontWeight={"bold"}
                  textColor={"#57357F"}
                  textAlign={{ base: "center" }}
                >
                  {data.head}
                </Text>
              </Box>

              <Box minH={"80px"} mt={"6"} w={{ base: "100%", md: "400px" }}>
                <Text fontSize={"15.4px"} textAlign={{ base: "center" }}>
                  {data.Comment}
                </Text>
              </Box>

              <Box
                minH={"40px"}
                w={"120px"}
                mt={"5"}
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
              minH={{ base: "390px", md: "400px" }}
              w={{ base: "100%", md: "45%" }}
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
    </Box>
  );
};

export default Send;
