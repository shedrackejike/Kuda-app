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
        minH={{ base: "750px", lg: "40px", xl: "550px" }}
        w={{ base: "100%", lg: "86%", xl: "90%" }}
      >
        {free?.map((data) => (
          <Flex
            // minH={"500px"}
            // w={"90%"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            // alignItems={"center"}
            minH={{ base: "420px", lg: "40px", xl: "440px" }}
            justifyContent={{ xl: "space-between" }}
            w={{ base: "100%", lg: "50%", xl: "100%" }}
            flexDirection={{ base: "column-reverse", lg: "row", xl: "row" }}
          >
            <Box
              // minH={"400px"}
              // w={"40%"}
              minH={{ base: "400px", lg: "50%", xl: "400px" }}
              w={{ base: "80%", lg: "50%", xl: "40%" }}
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
              minH={{ base: "400px", lg: "50%", xl: "250px" }}
              w={{ base: "95%", lg: "50%", xl: "40%" }}
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
                  fontSize={{ base: "26px", lg: "50%", xl: "30px" }}
                  fontWeight={"bold"}
                  // textColor={"#57357F"}
                  textAlign={{ base: "center", lg: "0", xl: "0" }}
                >
                  {data.head}
                </Text>
              </Box>

              <Box
                minH={"80px"}
                mt={"6"}
                w={{ base: "80%", lg: "50%", xl: "400px" }}
              >
                <Text textAlign={{ base: "center", lg: "0", xl: "0" }}>
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
