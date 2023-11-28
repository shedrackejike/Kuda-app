import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { freeData } from "../../utils/free";

const Free = () => {
  const [free, setFree] = useState([]);

  useEffect(() => setFree(freeData), []);
  return (
    <Box>
      <Box
        // minH={"550px"}
        // w={"100%"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        {free?.map((data) => (
          <Flex
            // minH={"500px"}
            // w={"90%"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            // alignItems={"center"}
            minH={{ base: "420px", md: "440px" }}
            justifyContent={{ md: "space-between" }}
            w={{ base: "100%", md: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box
              // minH={"400px"}
              // w={"40%"}
              minH={{ base: "400px", md: "400px" }}
              w={{ base: "80%", md: "40%" }}
              justify={"center"}
              alignItems={"center"}
              backgroundImage={data.image}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundSize={"contain"}
              display={"flex"}
              //   margin={"auto"}
            ></Box>

            <Box
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
                  // fontWeight={"bold"}
                  textColor={"#40196D"}
                  fontSize={{ base: "26px", md: "30px" }}
                  fontWeight={"bold"}
                  // textColor={"#57357F"}
                  textAlign={{ base: "center", md: "none" }}
                >
                  {data.head}
                </Text>
              </Box>

              <Box minH={"80px"} mt={"6"} w={{ base: "80%", md: "400px" }}>
                <Text
                //  textAlign={{ base: "center", lg: "0", xl: "0" }}
                >
                  {data.Comment}
                </Text>
              </Box>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Free;
