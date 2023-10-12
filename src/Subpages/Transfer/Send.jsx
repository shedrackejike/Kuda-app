import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sendData } from "../../utils/send";

const Send = () => {
  const [send, setSend] = useState([]);

  useEffect(() => setSend(sendData), []);
  return (
    <Box>
      <Box minH={"550px"} w={"90%"} margin={"auto"}>
        {send?.map((data) => (
          <Flex
            minH={"500px"}
            w={"100%"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box minH={"250px"} w={"40%"}>
              <Box minH={"80px"} w={"390px"}>
                <Text
                  fontSize={"45px"}
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
  );
};

export default Send;
