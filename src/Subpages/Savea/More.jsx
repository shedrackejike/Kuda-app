import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { saveDate } from "../../utils/save";

const More = () => {
  const [save, setSave] = useState([]);

  useEffect(() => setSave(saveDate), []);
  return (
    <Box
      margin={"auto"}
      w={{ base: "100%", lg: "86%", xl: "90%" }}
      mt={"90px"}
      minH={{ base: "350px", xl: "550px" }}
    >
      {save?.map((data) => (
        <Flex
          //   minH={"500px"}
          //   w={"100%"}
          //   justifyContent={"space-around"}
          //   alignItems={"center"}
          minH={{ base: "300px", xl: "550px" }}
          alignItems={"center"}
          justifyContent={{ xl: "space-between" }}
          w={{ base: "100%", lg: "50%", xl: "100%" }}
          flexDirection={{ base: "column", lg: "row", xl: "row" }}
        >
          <Box
            //   minH={"250px"} w={"40%"}
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
              //   w={"400px"}
              mt={"3"}
              w={{ base: "80%", lg: "50%", xl: "400px" }}
            >
              <Text textAlign={{ base: "center", lg: "0", xl: "0" }}>
                {data.Comment}
              </Text>
            </Box>

            <Box
              minH={"40px"}
              w={"120px"}
              mt={"3"}
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
            minH={{ base: "390px", lg: "50%", xl: "400px" }}
            w={{ base: "90%", lg: "50%", xl: "60%" }}
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
