import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { tradingData } from "../../utils/trading";

const Trading = () => {
  const [trading, setTrading] = useState([]);
  useEffect(() => setTrading(tradingData), []);
  return (
    <Box>
      <Box>
        <Box
          // minH={"550px"} w={"90%"} margin={"auto"}
          margin={"auto"}
          w={{ base: "100%", md: "90%" }}
          mt={"90px"}
          minH={{ base: "350px", md: "550px" }}
        >
          {trading?.map((data) => (
            <Flex
              minH={{ base: "300px", md: "550px" }}
              alignItems={"center"}
              justifyContent={{ md: "space-between" }}
              w={{ base: "100%", md: "100%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box
                //  minH={"250px"} w={"40%"}
                minH={{ base: "300px", md: "400px" }}
                w={{ base: "90%", md: "40%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box minH={"80px"} w={{ base: "250px", md: "450px" }}>
                  <Text
                    textColor={"#40196D"}
                    fontSize={{ base: "20px", md: "40px" }}
                    fontWeight={"bold"}
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} mt={"3"} w={{ base: "100%", md: "364px" }}>
                  <Text>{data.Comment}</Text>
                </Box>
                <Text fontSize={"12"}>{data.clear}</Text>

                <Box
                  minH={"40px"}
                  w={"320px"}
                  mt={"3"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Link>
                    <Text
                      fontSize={"15px"}
                      fontWeight={"semibold"}
                      textColor={"#40196D"}
                      marginLeft={{ base: "120px", md: "0" }}
                    >
                      {data.button}
                    </Text>
                  </Link>
                </Box>
              </Box>

              <Box
                minH={{ base: "300px", md: "400px" }}
                w={{ base: "90%", md: "50%" }}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
              ></Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Trading;
