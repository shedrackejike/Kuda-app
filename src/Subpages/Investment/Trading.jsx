import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { tradingData } from "../../utils/trading";

const Trading = () => {
  const [trading, setTrading] = useState([]);
  useEffect(() => setTrading(tradingData), []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {trading?.map((data) => (
            <Flex
              minH={"500px"}
              w={"100%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box minH={"250px"} w={"40%"}>
                <Box minH={"80px"} w={"450px"}>
                  <Text
                    fontSize={"34px"}
                    fontWeight={"extrabold"}
                    textColor={"#40196D"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
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
                    >
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
                // margin={"auto"}
              ></Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Trading;
