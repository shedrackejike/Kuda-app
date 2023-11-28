import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { needData } from "../../utils/need";

const Need = () => {
  const [need, setNeed] = useState([]);

  useEffect(() => setNeed(needData), []);
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
          {need?.map((data) => (
            <Flex
              // minH={"500px"}
              // w={"98%"}
              // justifyContent={"space-between"}
              // alignItems={"center"}

              alignItems={"center"}
              minH={{ base: "420px", md: "500px" }}
              justifyContent={{ md: "space-between" }}
              w={{ base: "100%", md: "100%" }}
              flexDirection={{ base: "column-reverse", md: "row" }}
            >
              <Box
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
                //  minH={"250px"} w={"40%"}
                minH={{ base: "400px", md: "250px" }}
                w={{ base: "95%", md: "40%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box minH={"80px"} w={"390px"}>
                  <Text
                    textColor={"#40196D"}
                    fontSize={{ base: "26px", md: "30px" }}
                    fontWeight={"bold"}
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

export default Need;
