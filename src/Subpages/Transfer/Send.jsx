import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sendData } from "../../utils/send";

const Send = () => {
  const [send, setSend] = useState([]);

  useEffect(() => setSend(sendData), []);
  return (
    <Box
      w={{ base: "100%", lg: "86%", xl: "100%" }}
      mt={"90px"}
      minH={{ base: "350px", xl: "550px" }}
    >
      <Box minH={{ base: "300px", xl: "550px" }} w={"90%"} margin={"auto"}>
        {send?.map((data) => (
          <Flex
            minH={{ base: "300px", xl: "550px" }}
            alignItems={"center"}
            justifyContent={{ xl: "space-between" }}
            w={{ base: "100%", lg: "50%", xl: "100%" }}
            flexDirection={{ base: "column", lg: "row", xl: "row" }}
          >
            <Box
              minH={{ base: "300px", lg: "50%", xl: "400px" }}
              w={{ base: "90%", lg: "50%", xl: "90%" }}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box minH={"80px"} w={"390px"}>
                <Text
                  // fontSize={"45px"}
                  // fontWeight={"bold"}
                  // textColor={"#40196D"}
                  fontSize={{ base: "46px", lg: "50%", xl: "40px" }}
                  fontWeight={"bold"}
                  textColor={"#57357F"}
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
                <Text
                  fontSize={"15.4px"}
                  textAlign={{ base: "center", lg: "0", xl: "0" }}
                >
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
              minH={{ base: "390px", lg: "50%", xl: "400px" }}
              w={{ base: "100%", lg: "50%", xl: "60%" }}
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
