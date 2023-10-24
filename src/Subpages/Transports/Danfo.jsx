import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { danfoData } from "../../utils/danfo";

const Danfo = () => {
  const [danfo, setDanfo] = useState([]);

  useEffect(() => {
    setDanfo(danfoData);
  }, []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {danfo?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box minH={"200px"} w={"40%"}>
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
                  <Text fontSize={"18px"}>{data.Comment}</Text>
                </Box>
                <Box
                  mt={"3"}
                  minH={"40px"}
                  w={"220px"}
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
                minH={"400px"}
                w={"40%"}
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

export default Danfo;
