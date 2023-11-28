import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { cardData } from "../../utils/card";

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => setCard(cardData), []);
  return (
    <Box>
      <Box>
        <Box
          // minH={"550px"} w={"90%"}
          margin={"auto"}
          minH={{ base: "750px", md: "550px" }}
          w={{ base: "100%", md: "90%" }}
        >
          {card?.map((data) => (
            <Flex
              // minH={"500px"}
              // w={"100%"}
              // justifyContent={"space-around"}
              alignItems={"center"}
              minH={{ base: "420px", md: "500px" }}
              justifyContent={{ md: "space-between" }}
              w={{ base: "100%", md: "100%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box
                //  minH={"250px"} w={"40%"}
                minH={{ base: "400px", md: "250px" }}
                w={{ base: "95%", md: "40%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box minH={"80px"} w={"300px"}>
                  <Text
                    // fontSize={"35px"}
                    // fontWeight={"bold"}
                    // textColor={"#40196D"}
                    fontSize={{ base: "26px", md: "40px" }}
                    fontWeight={"bold"}
                    textColor={"#57357F"}
                    textAlign={{ base: "center" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} mt={"3"} w={{ base: "80%", md: "400px" }}>
                  <Text
                  //  textAlign={{ base: "center", lg: "0", xl: "0" }}
                  >
                    {data.Comment}
                  </Text>
                </Box>

                <Box
                  minH={"40px"}
                  w={"220px"}
                  mt={"3"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Link>
                    <Text fontWeight={"semibold"} textColor={"#40196D"}>
                      {data.button}
                    </Text>
                  </Link>
                </Box>
              </Box>

              <Box
                // minH={"470px"}
                // w={"50%"}
                minH={{ base: "400px", md: "400px" }}
                w={{ base: "95%", md: "90%" }}
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
    </Box>
  );
};

export default Card;
