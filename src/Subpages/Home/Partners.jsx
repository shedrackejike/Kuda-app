import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { partersData } from "../../utils/partners";

const Partners = () => {
  const [parters, setParterns] = useState([]);

  useEffect(() => {
    setParterns(partersData);
  }, []);

  return (
    <Box
      bg={"#FBFBFB"}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      minH={{ base: "280px", md: "550px" }}
      w={{ base: "100%", md: "90%" }}
    >
      <Box
        minH={{ base: "420px", md: "440px" }}
        justifyContent={{ md: "space-between" }}
        w={{ base: "100%", md: "100%" }}
      >
        <Box w={"50%"} minH={"60px"} margin={"auto"} mt={"%"}>
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"bold"}
            textColor={"#57357F"}
          >
            Our Partners
          </Text>
        </Box>

        <Flex
          mt={"1%"}
          margin={"auto"}
          minH={{ base: "200px", md: "190px" }}
          w={{ base: "100%", md: "90%" }}
          flexWrap={{ base: "wrap", md: "wrap" }}
          justify={"space-between"}
          justifyContent={"space-around"}
        >
          {parters?.map((data) => (
            <Flex
              w={"90%"}
              minH={"80px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"auto"}
            >
              <Box
                // h={"40px"} w={"160px"}
                h={{ base: "50px", md: "50px" }}
                w={{ base: "28%", md: "100px" }}
              >
                <Image
                  objectFit="inherit"
                  src={data.image}
                  alt="logo"
                  width={"fit-content"}
                  boxSize="100%"
                />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Partners;
