import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { turnnData } from "../../utils/turnn";

const Turnn = () => {
  const [turnn, setTurnn] = useState([]);

  useEffect(() => setTurnn(turnnData), []);
  return (
    <Box>
      <Box minH={"550px"} w={"90%"} margin={"auto"}>
        {turnn?.map((data) => (
          <Flex
            minH={"500px"}
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
            ></Box>

            <Box minH={"200px"} w={"40%"}>
              <Box minH={"50px"} w={"390px"}>
                <Text
                  fontSize={"32px"}
                  fontWeight={"bold"}
                  textColor={"#40196D"}
                >
                  {data.head}
                </Text>
              </Box>

              <Box minH={"80px"} w={"400px"} mt={"3"}>
                <Text fontWeight={"semibold"}>{data.Comment}</Text>
              </Box>

              <Box minH={"40px"} w={"240px"} mt={"3"} display={"flex"}>
                <Link>
                  <Text fontWeight={"semibold"} textColor={"#40196D"}>
                    {data.button}
                  </Text>
                </Link>
              </Box>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Turnn;
