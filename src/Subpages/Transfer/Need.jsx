import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { needData } from "../../utils/need";

const Need = () => {
  const [need, setNeed] = useState([]);

  useEffect(() => setNeed(needData), []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {need?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                minH={"470px"}
                w={"40%"}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
              ></Box>

              <Box minH={"250px"} w={"40%"}>
                <Box minH={"80px"} w={"390px"}>
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
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Need;
