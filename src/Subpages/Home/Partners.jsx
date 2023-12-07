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
        <Box w={"50%"} minH={"60px"} margin={"auto"}>
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
          minH={{ base: "200px", md: "100px" }}
          w={{ base: "100%", md: "90%" }}
          justify={"space-between"}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent={"space-around"}
        >
          {parters?.map((data) => (
            <Flex
              key={data.id}
              minH={{ base: "90px", md: "190px" }}
              w={{ base: "50%", md: "90%" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                h={{ base: "50px", md: "50px" }}
                w={{ base: "58%", md: "100px" }}
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
