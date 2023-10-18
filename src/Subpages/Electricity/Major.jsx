import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { majorData } from "../../utils/major";

const Major = () => {
  const [major, setMajor] = useState([]);

  useEffect(() => setMajor(majorData), []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {major?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box minH={"200px"} w={"40%"}>
                <Box minH={"80px"} w={"390px"}>
                  <Text
                    fontSize={"30px"}
                    fontWeight={"extrabold"}
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
                  w={"160px"}
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
                w={"45%"}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.image}
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

export default Major;
