import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { freeData } from "../../utils/free";

const Free = () => {
  const [free, setFree] = useState([]);

  useEffect(() => setFree(freeData), []);
  return (
    <Box>
      <Box
        minH={"550px"}
        w={"100%"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        {free?.map((data) => (
          <Flex
            minH={"500px"}
            w={"90%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              minH={"400px"}
              w={"40%"}
              justify={"center"}
              alignItems={"center"}
              backgroundImage={data.image}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundSize={"contain"}
              display={"flex"}
              //   margin={"auto"}
            ></Box>

            <Box minH={"250px"} w={"40%"}>
              <Box minH={"80px"} w={"390px"}>
                <Text
                  fontSize={"30px"}
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
  );
};

export default Free;
