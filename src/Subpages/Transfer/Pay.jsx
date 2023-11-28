import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { payData } from "../../utils/pay";

const Pay = () => {
  const [pay, setPay] = useState([]);
  useEffect(() => setPay(payData), []);
  return (
    <Box>
      <Box>
        <Box
          // minH={"550px"} w={"90%"} margin={"auto"}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          minH={{ base: "500px", md: "550px" }}
          w={{ base: "100%", md: "90%" }}
        >
          {pay?.map((data) => (
            <Flex
              alignItems={"center"}
              minH={{ base: "420px", md: "500px" }}
              justifyContent={{ md: "space-between" }}
              w={{ base: "100%", md: "100%" }}
              flexDirection={{ base: "column-reverse", md: "row" }}
            >
              <Box
                // minH={"470px"}
                // w={"40%"}
                minH={{ base: "400px", md: "400px" }}
                w={{ base: "90%", md: "40%" }}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
              ></Box>

              <Box
                // minH={"250px"} w={"40%"}
                minH={{ base: "400px", md: "250px" }}
                w={{ base: "95%", md: "40%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box minH={"80px"} w={"390px"}>
                  <Text
                    // fontSize={"30px"}
                    // fontWeight={"extrabold"}
                    // textColor={"#40196D"}
                    textColor={"#40196D"}
                    fontSize={{ base: "36px", md: "30px" }}
                    fontWeight={"bold"}
                    // textColor={"#57357F"}
                    textAlign={{ base: "center" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} mt={"3"} w={{ base: "80%", md: "400px" }}>
                  <Text textAlign={{ base: "center" }}>{data.Comment}</Text>
                </Box>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Pay;
