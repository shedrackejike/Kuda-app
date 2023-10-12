import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { cardData } from "../../utils/card";

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => setCard(cardData), []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {card?.map((data) => (
            <Flex
              minH={"500px"}
              w={"100%"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box minH={"250px"} w={"40%"}>
                <Box minH={"80px"} w={"300px"}>
                  <Text
                    fontSize={"35px"}
                    fontWeight={"bold"}
                    textColor={"#40196D"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
                  <Text>{data.Comment}</Text>
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
                minH={"470px"}
                w={"50%"}
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
